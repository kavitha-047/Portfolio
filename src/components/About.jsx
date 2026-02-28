import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import kaviPhoto from "../assets/kaviphoto.jpeg";
import cvFile from "../assets/Kavitha k (1.pdf";

const About = () => {
    return (
        <div className="relative py-24 overflow-hidden">
            {/* Floating Marquee Effect */}
            <div className="absolute top-12 left-0 w-full overflow-hidden py-4 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm -rotate-2 z-0 scale-110">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap space-x-12"
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center space-x-8 text-indigo-500/30 font-bold text-3xl tracking-widest uppercase italic">
                            <span>Explore</span>
                            <span className="text-purple-500/30">✦</span>
                            <span>Build</span>
                            <span className="text-purple-500/30">✦</span>
                            <span>Create</span>
                            <span className="text-purple-500/30">✦</span>
                            <span>Repeat</span>
                            <span className="text-purple-500/30">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-44 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-indigo-400 mb-2">About Me</h2>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Kavitha Kanagaraj</h1>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            As a 2025 Computer Science graduate with a focus on Front-End development,
                            I am driven to craft responsive, high-performance web applications that
                            combine elegant design with seamless user experiences.
                        </p>

                        <div className="glass-ui p-6 rounded-2xl border-indigo-500/10 mb-10 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500" />

                            <p className="text-gray-300 italic text-lg pl-2">
                                "Leveraging AI as a productivity partner to enhance creativity, efficiency, and problem solving"
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={cvFile}
                                target="_blank"
                                className="px-6 py-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 transition-all duration-300 flex items-center gap-2 group"
                            >
                                <FileText size={20} />
                                Download CV
                            </a>
                            <a
                                href="#portfolio"
                                className="px-6 py-3 rounded-xl glass-ui text-white hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="relative flex justify-center" data-aos="fade-left">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 opacity-20 blur-2xl animate-pulse" />

                            {/* Profile Wrapper */}
                            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500">
                                <div className="w-full h-full rounded-full bg-[#050414] overflow-hidden p-1">
                                    <img
                                        src={kaviPhoto}
                                        alt="Kavitha kanagaraj"
                                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400";
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white glass-ui border-indigo-500/20 animate-bounce">
                                🚀
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
