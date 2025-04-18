import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const projects = [
//     {
//         name: 'Medical Camp Management',
//         image: 'https://i.ibb.co.com/mr6sy506/Screenshot-2025-03-09-223634.png',
//         techStack: ['React', 'Node.js', 'MongoDB'],
//         description: 'The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation in medical camps.',
//         liveLink: 'https://medical-camp-management-1b67d.web.app',
//         githubLink: 'https://github.com/imran-information/Medical-Camp-Management-System-client',
//         challenges: 'Implemented JWT authentication for sensitive routes, robust table management with pagination and search capabilities.',
//         improvements: 'Better user experience and performance optimization.',
//     },
//     {
//         name: 'Next Generation',
//         image: 'https://i.ibb.co.com/XZ68gXBc/Screenshot-2025-03-09-222427.png',
//         techStack: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Firebase'],
//         description: 'A blogging platform where users can read, write, and manage blogs. Features include authentication, wishlists, comments, and dynamic filtering.',
//         liveLink: 'https://next-gen-230be.web.app/',
//         githubLink: 'https://github.com/imran-information/next-generation-client',
//         challenges: 'Implemented JWT authentication, real-time updates, and optimized blog filtering.',
//         improvements: 'Future plans include multi-language support, real-time notifications, and mobile app integration.',
//     },
//     {
//         name: 'Car Doctor',
//         image: 'https://i.ibb.co.com/Css741bm/Screenshot-2025-03-09-223019.png',
//         techStack: ['NextJs', 'MongoDB', 'Material UI'],
//         description: 'Car Doctor is a web application built with Next.js that provides car repair services. Users can view available services, book appointments, and manage their bookings.',
//         liveLink: 'https://car-doctor-next-js.vercel.app',
//         githubLink: 'https://github.com/imran-information/car-doctor-next-JS',
//         challenges: 'Optimized UI design.',
//         improvements: "Refined the review system for better accuracy and enhanced user interaction.",
//     },
//     {
//         name: 'Chill Gamer',
//         image: 'https://i.ibb.co.com/2Ydtn6P2/Screenshot-2025-02-07-171625.png',
//         techStack: ['React', 'Node.js', 'MongoDB', 'Material UI'],
//         description: 'Chill Gamer is a game review application where users can explore and share game reviews. Features include user authentication, review management, and a watchlist.',
//         liveLink: 'https://chill-gamer-3528e.web.app/',
//         githubLink: 'https://github.com/imran-information/chill-gamer-client',
//         challenges: 'Implemented JWT authentication, pagination, and optimized UI design.',
//         improvements: 'Enhanced review filtering and improved user engagement.',
//     },

// ];


export default function ProjectsSection() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await axios.get('https://imran-portfolio-server.vercel.app/projects');
            setProjects(res.data)
        };
        fetchProjects()
    }, [])

    return (
        <div className="container mx-auto py-24 ">
            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-3xl font-bold text-center mb-8 ">Project'<span className="text-primary-color">S</span> </h2>
            <div data-aos="zoom-in" data-aos-duration="1500" className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 px-6 lg:px-0">
                {projects?.map((project) => (
                    <div key={project._id}
                        className="bg-[#2d343f] p-6 rounded-xl shadow-lg border border-[#13bbff] transition-transform duration-300 hover:scale-105">

                        {/* Image with Hover Effect */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-transform duration-300 hover:scale-105"
                        />

                        <h3 className="text-xl font-semibold mb-2 text-primary-color">{project.name}</h3>
                        <p className="text-sm text-dressTxt mb-2 font-semibold">{project.description}</p>
                        <div className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl mx-auto">
                            {
                                project.techStack.slice(0, 3).map((tec, index) => (
                                    <p
                                        key={index}
                                        className="border border-primary-color text-primary-color py-1 px-4 rounded-full text-sm font-medium hover:bg-primary-color hover:text-white transition-all duration-200"
                                    >
                                        {tec}
                                    </p>
                                ))
                            }

                            {
                                project.techStack.length > 3 && (
                                    <p className="border border-gray-300 text-dressTxt py-1 px-4 rounded-full text-sm font-medium">
                                        +{project.techStack.length - 3} more
                                    </p>
                                )
                            }
                        </div>


                        <div className="flex justify-center items-center">
                            <Link to={`/project-details/${project._id}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        // backgroundColor: '#22282f',
                                        color: '#13bbff',
                                        border: '1px solid #13bbff',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        marginTop: '10px',
                                        marginLeft: '10px',
                                        transition: 'all 0.50s ease',
                                        '&:hover': {
                                            backgroundColor: '#13bbff',
                                            borderColor: '#13bbff',
                                            color: '#1b1f24',
                                            boxShadow: '0 0 20px #13bbff',

                                        }
                                    }}
                                >
                                    View More / Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
