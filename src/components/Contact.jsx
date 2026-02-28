import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import { supabase } from "../supabaseClient";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Sending message..." });

        try {
            const { error } = await supabase
                .from("messages")
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    }
                ]);

            if (error) throw error;

            // Send Email Notification using EmailJS
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_email: "kavithakanagaraj470@gmail.com", // Your designated email
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
            } catch (emailError) {
                console.error("Email notification failed:", emailError);
            }

            setStatus({ type: "success", message: "Message sent successfully!" });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus({ type: "error", message: "Failed to send message. Please try again." });
        } finally {
            setTimeout(() => setStatus({ type: "", message: "" }), 3000);
        }
    };

    return (
        <div className="pt-24 pb-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-gray-500 tracking-widest uppercase text-sm font-medium">
                        Have a project in mind? Let's talk.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div data-aos="fade-right">
                        <div className="glass-ui p-8 rounded-3xl border-white/5 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-4 rounded-2xl bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Email Me</p>
                                        <p className="text-gray-200">kavithakanagaraj470@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-4 rounded-2xl bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Location</p>
                                        <p className="text-gray-200">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Box */}
                        <div className="glass-ui p-8 rounded-3xl border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6">Follow My Journey</h3>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, href: "https://github.com/kavitha-047" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/kavitha470/" },
                                    { Icon: Instagram, href: "#" }
                                ].map(({ Icon, href }, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-2xl glass-ui text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300"
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-ui p-8 rounded-3xl border-white/5" data-aos="fade-left">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2 pl-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2 pl-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300"
                                    placeholder="yourname@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2 pl-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-all duration-300 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] shadow-indigo-600 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>

                            {status.message && (
                                <div className={`text-center py-2 rounded-xl text-sm ${status.type === "success" ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
