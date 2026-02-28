import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Milestones = () => {
    const milestonesData = [
        {
            type: "Internship",
            year: "2025",
            title: "Frontend Intern",
            company: "MentorHints",
            description: "Developed a Full Stack Application, collaborated with UI/UX Team, Frontend Team, Backend Team.",
            credentialLink: "/src/assets/internship.png"
        },
        {
            type: "Course",
            year: "2025",
            title: "Front-End Development",
            company: "Mentor Hints",
            description: "Comprehensive certification on modern frontend technologies including React, Tailwind CSS, and UX principles.",
            credentialLink: "/src/assets/course.png"
        }
    ];

    return (
        <section id="milestones" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Milestones & <span className="text-gradient">Skills</span>
                    </h1>
                    <p className="text-gray-500 tracking-[0.2em] uppercase text-sm font-medium">
                        Academic & Professional Journey
                    </p>
                </div>

                {/* Cards Container */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {milestonesData.map((milestone, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="glass-ui p-8 md:p-12 rounded-[2rem] border-white/5 relative overflow-hidden group">
                                {/* Glow effect */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -mr-32 -mt-32 transition-all duration-500 group-hover:bg-indigo-600/20" />

                                <div className="relative z-10 flex flex-col md:row justify-between items-start md:items-center gap-8 md:flex-row">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase">
                                                {milestone.type}
                                            </span>
                                            <span className="text-gray-500 font-medium">{milestone.year}</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-indigo-400 text-xl font-medium mb-6">
                                            {milestone.company}
                                        </p>

                                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                            {milestone.description}
                                        </p>
                                    </div>

                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={milestone.credentialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 rounded-2xl border border-indigo-500/30 text-white font-bold tracking-wider hover:bg-indigo-500/10 transition-all duration-300 flex items-center gap-3 group/btn whitespace-nowrap"
                                    >
                                        VIEW CREDENTIAL
                                        <ExternalLink size={18} className="text-indigo-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
