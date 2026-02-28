import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Award, Layout, Cpu, Eye } from "lucide-react";
import ilovepdfImg from "../assets/ilovepdf.png";
import planteeImg from "../assets/plantee.png";
import courseImg from "../assets/course.png";
import internshipImg from "../assets/internship.png";
import wordpressImg from "../assets/Wordpress.jpg";
import vibeCodingImg from "../assets/vibw coding.jpg";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");

    // Data Arrays
    const projects = [
        {
            id: "project-1",
            title: "I love PDF",
            description: "A web-based PDF utility application that allows users to merge, split, seamlessly in the browser. Built with a focus on performance and simplicity.",
            image: ilovepdfImg,
            tags: ["React", "Tailwind", "Firebase"],
            live: "https://intern-proto2.vercel.app/",
            github: "https://github.com/MuthuKr1shhnan/intern-proto2"
        },
        {
            id: "project-2",
            title: "Plantee",
            description: "A responsive plant care web app that helps users explore plant species, care tips, and build a personal plant wishlist. Designed with a fresh UI.",
            image: planteeImg,
            tags: ["Supabase", "Javascript", "Framer Motion"],
            live: "https://planteee.netlify.app/",
            github: "https://github.com/kavitha-047/plantee"
        },
        {
            id: "project-3",
            title: "E-Shop Modern",
            description: "A sophisticated e-commerce platform with real-time inventory tracking, secure Stripe integration, and a premium shopping experience.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2064&auto=format&fit=crop",
            tags: ["tailwind", "Stripe", "wordpress"],
            live: "#",
            github: "#"
        },
        {
            id: "project-4",
            title: "Echo Stream",
            description: "A high-performance audio streaming dashboard with real-time analytics, user-centric playlists, and seamless audio synchronization.",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
            tags: ["Typescript", "Web Audio API", "Tailwind"],
            live: "#",
            github: "#"
        }
    ];

    const certificates = [
        {
            id: "cert-1",
            title: "Front-End Development",
            issuer: "Mentor Hints",
            year: "2025",
            image: courseImg,
        },
        {
            id: "cert-2",
            title: "Front-End Development",
            issuer: "Mentor Hints",
            year: "2025",
            image: internshipImg,
        },
        {
            id: "cert-3",
            title: "wordpress",
            issuer: "Udemy",
            year: "2025",
            image: wordpressImg,
        },
        {
            id: "cert-4",
            title: "Vibe Coding",
            issuer: "Udemy",
            year: "2025",
            image: vibeCodingImg,
        }
    ];

    const techStack = [
        { id: "tech-1", name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { id: "tech-2", name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { id: "tech-3", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { id: "tech-4", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: "tech-5", name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { id: "tech-6", name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { id: "tech-7", name: "WordPress", icon: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" },
        { id: "tech-8", name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" }
    ];

    const tabs = [
        { id: "projects", label: "Projects", icon: Layout },
        { id: "certificates", label: "Certificates", icon: Award },
        { id: "techStack", label: "Tech Stack", icon: Cpu }
    ];

    return (
        <div className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Works</span>
                    </h1>
                    <p className="text-gray-500 tracking-widest uppercase text-sm font-medium">
                        A Selection of My Recent Projects
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
                    <div className="inline-flex glass-ui p-1 rounded-2xl border-white/5">
                        {tabs.map((tab) => (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-indigo-600/20 text-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.1)] border border-indigo-500/20"
                                    : "text-gray-500 hover:text-gray-300"
                                    }`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {activeTab === "projects" && (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {projects.map((project) => (
                                        <div key={project.id} className="glass-ui rounded-3xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                                            <div className="relative overflow-hidden aspect-video">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent opacity-60" />

                                                {/* Tags on top of image */}
                                                <div className="absolute top-4 left-4 flex gap-2">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider rounded-lg border border-white/10">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-8">
                                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                                    {project.description}
                                                </p>

                                                <div className="flex gap-4">
                                                    <motion.a
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 px-4 py-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2"
                                                    >
                                                        Live Demo <ExternalLink size={16} />
                                                    </motion.a>
                                                    <motion.a
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 px-4 py-3 rounded-xl glass-ui text-white border-white/5 hover:border-white/20 transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2"
                                                    >
                                                        GitHub <ArrowRight size={16} />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === "certificates" && (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {certificates.map((cert) => (
                                        <div key={cert.id} className="glass-ui rounded-3xl overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                                    <button className="px-6 py-2 bg-white text-black rounded-xl font-bold flex items-center gap-2">
                                                        <Eye size={18} /> View Certificate
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                                                <div className="flex justify-between items-center text-gray-500 text-xs">
                                                    <span>{cert.issuer}</span>
                                                    <span>{cert.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === "techStack" && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                    {techStack.map((tech) => (
                                        <div
                                            key={tech.id}
                                            className="glass-ui p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2"
                                        >
                                            <div className="w-16 h-16 relative flex items-center justify-center">
                                                {/* Glow background */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain relative z-10" />
                                            </div>
                                            <span className="text-gray-400 font-medium tracking-wider text-sm group-hover:text-white transition-colors duration-300">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

const ArrowRight = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default Portfolio;
