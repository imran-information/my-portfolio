import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const projects = [
//     {
//         name: 'Hostel Management System',
//         image: 'https://res.cloudinary.com/domslx1oj/image/upload/v1748672454/hostel-management-system-78bac.web.app__ryfrvv.png',
//         techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase Auth', 'Tailwind CSS', 'Framer Motion', 'React Query'],
//         description: 'HostelHub is a modern hostel management platform designed to streamline meal management, user administration, payments, and community engagement for students and administrators. Built with React, Node.js, MongoDB, and Stripe, HostelHub offers a seamless experience for both web and mobile users',
//         liveLink: 'https://hostel-management-system-78bac.web.app',
//         githubLink: 'https://github.com/imran-information/Hostel-Management-System/tree/main',
//         challenges: 'Implemented JWT authentication for sensitive routes, robust table management with pagination and search capabilities.',
//         improvements: 'Better user experience and performance optimization.',
//     },
//     {
//         name: 'Medical Camp Management',
//         image: 'https://res.cloudinary.com/domslx1oj/image/upload/v1748674375/medical-camp-management-1b67d.web.app__u4mbaj.png',
//         techStack: ['React', 'Node.js', 'MongoDB'],
//         description: 'The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation in medical camps.',
//         liveLink: 'https://medical-camp-management-1b67d.web.app',
//         githubLink: 'https://github.com/imran-information/Medical-Camp-Management-System-client',
//         challenges: 'Implemented JWT authentication for sensitive routes, robust table management with pagination and search capabilities.',
//         improvements: 'Better user experience and performance optimization.',
//     },
//     {
//         name: 'Next Generation',
//         image: 'https://res.cloudinary.com/domslx1oj/image/upload/v1748674375/medical-camp-management-1b67d.web.app__u4mbaj.png',
//         techStack: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Firebase'],
//         description: 'A blogging platform where users can read, write, and manage blogs. Features include authentication, wishlists, comments, and dynamic filtering.',
//         liveLink: 'https://next-gen-230be.web.app/',
//         githubLink: 'https://github.com/imran-information/next-generation-client',
//         challenges: 'Implemented JWT authentication, real-time updates, and optimized blog filtering.',
//         improvements: 'Future plans include multi-language support, real-time notifications, and mobile app integration.',
//     },
//     {
//         name: 'Car Doctor',
//         image: 'https://res.cloudinary.com/domslx1oj/image/upload/v1748674487/car-doctor-next-js.vercel.app__xh1w1w.png',
//         techStack: ['NextJs', 'MongoDB', 'Material UI'],
//         description: 'Car Doctor is a web application built with Next.js that provides car repair services. Users can view available services, book appointments, and manage their bookings.',
//         liveLink: 'https://car-doctor-next-js.vercel.app',
//         githubLink: 'https://github.com/imran-information/car-doctor-next-JS',
//         challenges: 'Optimized UI design.',
//         improvements: "Refined the review system for better accuracy and enhanced user interaction.",
//     },
//     {
//         name: 'Chill Gamer',
//         image: 'https://res.cloudinary.com/domslx1oj/image/upload/v1748674601/chill-gamer-3528e.web.app__jwrj2d.png',
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
                    <div
                        key={project._id}
                        className="group bg-[#2d343f] p-6 rounded-xl shadow-lg border border-transparent hover:border-[#13bbff] transition-all duration-500"
                    >
                        {/* Full Scroll Image on Hover */}
                        <div className="overflow-hidden rounded-lg shadow-md mb-4 h-48">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto min-h-full object-top group-hover:translate-y-[-90%] transition-transform duration-[4000ms] ease-in-out"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2 text-primary-color">{project.name}</h3>

                        {/* Description */}
                        <p
                            className="text-sm text-dressTxt mb-2 font-semibold "
                            title={project.description.length > 160 ? project.description : undefined}
                        >
                            {project.description.length > 160
                                ? project.description.slice(0, 160) + '...'
                                : project.description
                            }
                        </p>



                        {/* Tech Stack */}
                        < div className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl mx-auto" >
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

                        {/* Button */}
                        <div className="flex justify-center items-center">
                            <Link to={`/project-details/${project._id}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
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
                                        },
                                    }}
                                >
                                    View More / Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
}
