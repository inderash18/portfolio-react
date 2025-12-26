import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Send, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (no backend needed for demo)
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
    ];

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com', username: '@johndoe' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', username: 'John Doe' },
        { icon: Mail, label: 'Email', href: 'mailto:contact@example.com', username: 'contact@example.com' },
    ];

    return (
        <section id="contact" className="min-h-screen py-20 bg-gray-900/50">
            <div className="section-container">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Have a project in mind? Let's work together!"
                />

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="card">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social Links */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="card">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <Icon className="text-primary" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">{info.label}</p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-white hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                            <div className="space-y-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                                        >
                                            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Icon className="text-primary" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{social.label}</p>
                                                <p className="text-gray-400 text-sm">{social.username}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
