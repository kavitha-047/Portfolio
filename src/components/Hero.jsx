import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ExternalLink, Mail } from "lucide-react";

// Data moved outside to prevent re-renders
const TECH_STACK = ["React", "JavaScript", "Tailwind", "Vite"];
const SOCIAL_LINKS = [
    { Icon: Github, href: "https://github.com/kavitha-047" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/kavitha470/" },
    { Icon: Instagram, href: "#" }
];

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
            <div className="max-w-6xl w-full mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        READY TO INNOVATE
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
                        Web
                    </h1>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-gradient">
                        Developer
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I build modern, scalable and high-performance web applications
                        using React, Tailwind and cutting-edge frontend technologies.
                        Passionate about creating beautiful and functional user experiences.
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {TECH_STACK.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.5)", backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                                className="px-4 py-2 rounded-full glass-ui text-sm text-gray-300 border-white/5 transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#portfolio"
                            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                        >
                            Projects
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-3 rounded-xl glass-ui text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
                        >
                            Contact
                            <Mail size={18} />
                        </motion.a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl glass-ui text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Illustration/Asset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center items-center h-full min-h-[400px]"
                >
                    {/* Animated background rings - Optimized with pointer-events-none and will-change */}
                    <div className="absolute w-[120%] h-[120%] border border-indigo-500/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none will-change-transform" />
                    <div className="absolute w-[100%] h-[100%] border border-purple-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none will-change-transform" />

                    <img
                        src="/Animation1.gif"
                        alt="Hero Illustration"
                        loading="eager"
                        decoding="async"
                        className="w-full max-w-[500px] relative z-10 drop-shadow-[0_0_50px_rgba(99,102,241,0.2)] [transform:translateZ(0)] [backface-visibility:hidden]"
                        onError={(e) => {
                            e.target.src = "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg";
                        }}
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
