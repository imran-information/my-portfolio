import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCode, FaJs, } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs } from "react-icons/si";
const skillsCategories = [
    {
        name: "Frontend Development",
        icon: <FaHtml5 className="text-5xl" />,
        description: "Expertise in HTML5, CSS3, JavaScript, and modern frameworks like React.js.",
    },
    {
        name: "JavaScript (ES6+)",
        icon: <FaJs className="text-5xl" />,
        description: "Proficient in modern JavaScript features like ES6+, async/await, closures."
    },
    {
        name: "React.js",
        icon: <FaReact className="text-5xl" />,
        description: "Building dynamic and interactive web apps with React.js."
    },
    {
        name: "Next.js & SSR",
        icon: <SiNextdotjs className="text-5xl" />,
        description: "Enhancing performance and SEO using Next.js with SSR & SSG techniques.",
    },
    {
        name: "Backend Development",
        icon: <FaNodeJs className="text-5xl" />,
        description: "Building scalable backend applications with Node.js, Express, and databases.",
    },
    {
        name: "Database Management",
        icon: <SiMongodb className=" text-5xl" />,
        description: "Experience with MongoDB and Firebase for efficient data storage and retrieval.",
    },
    {
        name: "Version Control",
        icon: <FaGitAlt className=" text-5xl" />,
        description: "Proficient in Git and GitHub for version control and collaborative development.",
    },
    {
        name: "UI/UX & Design",
        icon: <FaFigma className=" text-5xl" />,
        description: "Creating visually appealing and user-friendly designs using Figma & Adobe XD.",
    },
    {
        name: "Performance Optimization",
        icon: <SiTailwindcss className=" text-5xl" />,
        description: "Optimizing websites for speed, SEO, and seamless user experiences.",
    },
    {
        name: "Cloud & Firebase",
        icon: <SiFirebase className=" text-5xl" />,
        description: "Using Firebase for authentication, real-time database, and cloud functions.",
    },
    {
        name: "Code Editors & Tools",
        icon: <FaCode className=" text-5xl" />,
        description: "Expertise in VSCode, debugging tools, and modern development environments.",
    },

];

const SkillsCategories = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Grid container  >
                {skillsCategories.map((category, index) => (
                    <Grid key={index}>
                        <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="ml-10 cursor-pointer" sx={{
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }} variant="outlined" style={{ textAlign: "center", backgroundColor: '#1b1f24' }}>
                            <CardContent className="w-96">
                                <div className="text-primary-color flex justify-center">
                                    {category.icon}
                                </div>
                                <Typography color="#13bbff" variant="h6">{category.name}</Typography>
                                <Typography color="#b0bec5" variant="h16">{category.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
};

export default SkillsCategories;