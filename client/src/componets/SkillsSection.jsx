import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Card, CardContent } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCode } from "react-icons/fa";
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
    },
    // {
    //     category: "Others",
    //     items: [
    //         { name: "Figma", icon: <FaFigma className="text-blue-500 text-2xl" />, level: 80 },
    //         { name: "VSCode", icon: <FaCode className="text-blue-500 text-2xl" />, level: 90 },
    //     ]
    // }
];

export default function SkillsSection() {
    return (
        <div className="container mx-auto py-24  px-6 lg:px-0">
            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-3xl font-bold text-center mb-8">Skill'<span className="text-primary-color">S</span> </h2>
            <div data-aos="zoom-in" data-aos-duration="1500" className="grid md:grid-cols-2  gap-10">
                {skills.map((category) => (
                    <div key={category.category}>
                        <h3 className="text-2xl text-primary-color text-center font-semibold mb-4">{category.category}</h3>
                        <div className="grid gap-4 ">
                            {category.items.map((skill, index) => {
                                const [hovered, setHovered] = useState(false);
                                return (
                                    <Card
                                        key={index}
                                        className="p-4 shadow-lg "
                                        style={{
                                            borderRadius: '20px',
                                            objectFit: 'cover',
                                            border: '3px solid #13bbff',
                                            transition: 'transform 0.3s ease-in-out',
                                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                            backgroundColor: '#2d343f',
                                            color: 'white',
                                            // boxShadow: '0 0 3px #13bbff'
                                        }}
                                        onMouseOver={() => setHovered(true)}
                                        onMouseOut={() => setHovered(false)}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2 text-primary-color">
                                                {skill.icon}
                                                <span className="font-medium text-white">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-primary-color font-semibold">{skill.level}%</span>
                                        </div>
                                        <LinearProgress
                                            variant="determinate"
                                            value={skill.level}
                                            sx={{ height: 8, borderRadius: 2, }}
                                        />
                                    </Card>
                                );
                            })}
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
