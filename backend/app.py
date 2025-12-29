from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MongoDB Connection
try:
    client = MongoClient('mongodb://127.0.0.1:27017/')
    db = client['portfolio_contact']
    collection = db['contacts']
    print("Connected to MongoDB Successfully")
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
