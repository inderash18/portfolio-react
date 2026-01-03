import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Server error:', data);
                setStatus('error');
                alert(`Error: ${data.message || 'Failed to send message'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('Connection Error: Is the backend server running? Check console for details.');
        }

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl w-full max-w-lg mx-auto">
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">NAME</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">EMAIL</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                />
            </div>

            <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">MESSAGE</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Let's build something amazing..."
                    required
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500'
                    : status === 'error'
                        ? 'bg-red-500/20 text-red-400 border border-red-500'
                        : 'bg-primary hover:opacity-90 text-white shadow-lg shadow-primary/20'
                    }`}
            >
                {status === 'idle' && (
                    <>
                        SEND MESSAGE <Send size={18} />
                    </>
                )}
                {status === 'submitting' && (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                )}
                {status === 'success' && (
                    <>
                        SENT SUCCESSFULLY <CheckCircle size={18} />
                    </>
                )}
                {status === 'error' && (
                    <>
                        ERROR SENDING <AlertCircle size={18} />
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
