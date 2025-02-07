import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
    {
        name: 'Medical Camp Management',
        image: 'https://i.ibb.co.com/6cM03qvP/Screenshot-2025-02-07-171525.png',
        techStack: ['React', 'Node.js', 'MongoDB'],
        description: 'The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation in medical camps.',
        liveLink: 'https://medical-camp-management-1b67d.web.app',
        githubLink: 'https://github.com/imran-information/Medical-Camp-Management-System-client',
        challenges: 'Implemented JWT authentication for sensitive routes, robust table management with pagination and search capabilities.',
        improvements: 'Better user experience and performance optimization.',
    },
    {
        name: 'Chill Gamer',
        image: 'https://i.ibb.co.com/2Ydtn6P2/Screenshot-2025-02-07-171625.png',
        techStack: ['React', 'Node.js', 'MongoDB', 'Material UI'],
        description: 'Chill Gamer is a game review application where users can explore and share game reviews. Features include user authentication, review management, and a watchlist.',
        liveLink: 'https://chill-gamer-3528e.web.app/',
        githubLink: 'https://github.com/imran-information/chill-gamer-client',
        challenges: 'Implemented JWT authentication, pagination, and optimized UI design.',
        improvements: 'Enhanced review filtering and improved user engagement.',
    },
    {
        name: 'Next Generation',
        image: 'https://i.ibb.co.com/RGtQs27H/Screenshot-2025-02-07-171553.png',
        techStack: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Firebase'],
        description: 'A blogging platform where users can read, write, and manage blogs. Features include authentication, wishlists, comments, and dynamic filtering.',
        liveLink: 'https://next-gen-230be.web.app/',
        githubLink: 'https://github.com/imran-information/next-generation-client',
        challenges: 'Implemented JWT authentication, real-time updates, and optimized blog filtering.',
        improvements: 'Future plans include multi-language support, real-time notifications, and mobile app integration.',
    }
];

export default function ProjectsSection() {
    return (
        <div className="container mx-auto py-24 px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Projects</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index}
                        className="bg-[#2d343f] p-6 rounded-xl shadow-lg border-2 border-[#3498db] transition-transform duration-300 hover:scale-105">

                        {/* Image with Hover Effect */}
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover rounded-lg shadow-md mb-4 transition-transform duration-300 hover:scale-110"
                        />

                        <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.name}</h3>
                        <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                        <div className="flex justify-between items-center">
                            <Link to={`/project-details/${index}`} style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: 'white',
                                        borderColor: '#3498db',
                                        '&:hover': { backgroundColor: '#3498db', color: '#fff' }
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
