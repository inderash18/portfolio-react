import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/portfolio';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="container-max py-32">
            <div className="grid lg:grid-cols-2 gap-24 items-start">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl sm:text-7xl font-black mb-10 leading-[0.95] text-white">Let's Connect</h1>

                    <p className="text-lg text-text-muted mb-16 max-w-md leading-relaxed font-medium">
                        I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative attention, I'd love to hear about it.
                    </p>

                    <div className="space-y-10">
                        {[
                            { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                            { icon: Phone, label: "Phone", value: contact.phone, href: null },
                            { icon: MapPin, label: "Location", value: "Coimbatore, India", href: null }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white ring-1 ring-white/10 group-hover:bg-primary/10 group-hover:ring-primary/30 transition-all duration-500 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <item.icon size={20} className="relative z-10" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.25em] mb-1">{item.label}</h3>
                                    {item.href ? (
                                        <a href={item.href} className="text-base font-black text-white hover:text-primary transition-colors tracking-tight">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-base font-black text-white tracking-tight">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl ring-1 ring-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                    <ContactForm />
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
