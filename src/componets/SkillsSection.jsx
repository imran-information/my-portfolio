import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Card, CardContent } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, level: 90 },
            { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" />, level: 85 },
            { name: "React.js", icon: <FaReact className="text-blue-400 text-2xl" />, level: 80 },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, level: 70 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" />, level: 65 }
        ]
    },
    {
        category: "Tools & Version Control",
        items: [
            { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-2xl" />, level: 85 }
        ]
    }
];

export default function SkillsSection() {
    return (
        <div className="container mx-auto py-24  px-4 md:px-0">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid md:grid-cols-2  gap-10">
                {skills.map((category) => (
                    <div key={category.category}>
                        <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                        <div className="grid gap-6 ">
                            {category.items.map((skill, index) => {
                                const [hovered, setHovered] = useState(false);
                                return (
                                    <Card
                                        key={index}
                                        className="p-4 shadow-lg "
                                        style={{
                                            borderRadius: '20px',
                                            objectFit: 'cover',
                                            border: '3px solid #3498db', // Blue border
                                            transition: 'transform 0.3s ease-in-out',
                                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                                            backgroundColor: '#2d343f',
                                            color: 'white'
                                        }}
                                        onMouseOver={() => setHovered(true)}
                                        onMouseOut={() => setHovered(false)}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                {skill.icon}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm font-semibold">{skill.level}%</span>
                                        </div>
                                        <LinearProgress
                                            variant="determinate"
                                            value={skill.level}
                                            sx={{ height: 8, borderRadius: 2 }}
                                        />
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
