import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    // Handle scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Milestones", id: "milestones" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#050414]/80 backdrop-blur-lg border-b border-white/10" : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-10 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#home"
                    className="text-2xl font-bold text-white tracking-tighter"
                    onClick={() => setActiveTab("home")}
                >
                    Kavi<span className="text-indigo-500">.</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActiveTab(item.id)}
                            className={`relative text-sm font-medium transition-colors duration-300 ${activeTab === item.id ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item.name}
                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="activeUnderline"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"

                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button (Simplified for now) */}
                <div className="md:hidden text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
