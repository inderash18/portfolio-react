from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime
import certifi

import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB Connection
try:
    # Use environment variable for MongoDB URI, default to local if not set
    mongo_uri = os.environ.get('MONGO_URI', 'mongodb://127.0.0.1:27017/') 
    
    # Create a new client and connect to the server
    # distinct connection logic for Atlas vs Local
    if "mongodb+srv" in mongo_uri:
        client = MongoClient(mongo_uri, server_api=ServerApi('1'), tlsCAFile=certifi.where(), tlsAllowInvalidCertificates=True)
    else:
        client = MongoClient(mongo_uri)
    
    # Send a ping to confirm a successful connection
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    
    db = client['portfolio_contact']
    collection = db['contacts']
except Exception as e:
    print(f"MongoDB connection error: {e}")

@app.route('/')
def home():
    return 'Portfolio Request API Running (Python)'

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Basic validation
        if not name or not email or not message:
            return jsonify({'message': 'All fields are required'}), 400

        new_contact = {
            'name': name,
            'email': email,
            'message': message,
            'date': datetime.now()
        }

        collection.insert_one(new_contact)
        print(f"New message saved: {name}, {email}")

        return jsonify({'message': 'Message sent successfully!'}), 201

    except Exception as e:
        print(f"Error saving message: {e}")
        return jsonify({'message': 'Error saving message', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
