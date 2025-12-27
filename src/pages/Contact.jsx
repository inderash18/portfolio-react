import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container-max py-24">
            <div className="grid lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
                    <p className="text-xl text-text-muted mb-12">
                        I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative attention, I'd love to hear about it.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                <a href={`mailto:${contact.email}`} className="text-text-muted hover:text-primary transition-colors">
                                    {contact.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                <p className="text-text-muted">{contact.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                <p className="text-text-muted">Coimbatore, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 rounded-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary-hover'
                                } text-white`}
                        >
                            {status === 'submitting' ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : status === 'success' ? (
                                <>Sent Successfully <CheckCircle size={20} /></>
                            ) : (
                                <>Send Message <Send size={20} /></>
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
