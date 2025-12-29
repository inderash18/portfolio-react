import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {

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
                    className="w-full"
                >
                    <ContactForm />
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
