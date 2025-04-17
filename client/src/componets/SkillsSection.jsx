import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Card } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiVercel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import MarqueeSlider from "./MarqueeSlider";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, level: 90 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" />, level: 85 },
            { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" />, level: 80 },
            { name: "Next.js", icon: <SiFirebase className="text-black text-2xl" />, level: 65 },
            { name: "Tailwind CSS", icon: <FaCss3Alt className="text-indigo-500 text-2xl" />, level: 80 },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, level: 70 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" />, level: 65 },
            { name: "Express.js", icon: <SiFirebase className="text-gray-700 text-2xl" />, level: 70 },
        ]
    },
    {
        category: "Hosting & Tools",
        items: [
            { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-2xl" />, level: 90 },
            { name: "Vercel", icon: <SiVercel className="text-white text-2xl" />, level: 85 },
        ]
    },
    {
        category: "Tools & Version Control",
        items: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-2xl" />, level: 85 },
        ]
    },

];


// Reusable animated skill card
function AnimatedSkillCard({ skill }) {
    const [progress, setProgress] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 2;
            setProgress(current);
            if (current >= skill.level) clearInterval(interval);
        }, 15); // animation speed

        return () => clearInterval(interval);
    }, [skill.level]);

    return (
        <Card
            className="p-4 shadow-lg"
            style={{
                borderRadius: '20px',
                border: '1px solid #13bbff',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                backgroundColor: '#2d343f',
                color: 'white',
                transition: 'transform 0.3s ease-in-out',
            }}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-primary-color">
                    {skill.icon}
                    <span className="font-medium text-white">{skill.name}</span>
                </div>
                <span className="text-sm text-primary-color font-semibold">{progress}%</span>
            </div>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 5,
                    borderRadius: 2,
                    backgroundColor: '#1a202c',
                    '& .MuiLinearProgress-bar': {
                        transition: 'width 0.2s linear',
                        backgroundColor: '#13bbff',
                    },
                }}
            />
        </Card>
    );
}

export default function SkillsSection() {
    return (
        <div className="container mx-auto py-24 px-6 lg:px-0">
            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-3xl font-bold text-center mb-8">
                Skill'<span className="text-primary-color">S</span>
            </h2>

            <div data-aos="zoom-in" data-aos-duration="1500" className="grid md:grid-cols-2 gap-10">
                {skills.map((category) => (
                    <div key={category.category}>
                        <h3 className="text-2xl text-primary-color text-center font-semibold mb-4">{category.category}</h3>
                        <div className="grid gap-4">
                            {category.items.map((skill, index) => (
                                <AnimatedSkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-20">
                <MarqueeSlider />
            </div>
        </div>
    );
}
