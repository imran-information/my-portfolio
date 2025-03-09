import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const projects = [
        {
            name: 'Medical Camp Management',
            image: 'https://i.ibb.co.com/mr6sy506/Screenshot-2025-03-09-223634.png',
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
            description: 'The Medical Camp Management System (MCMS) is a MERN stack-based web application designed to simplify the organization and participation in medical camps.',
            liveLink: 'https://medical-camp-management-1b67d.web.app',
            githubLink: 'https://github.com/imran-information/Medical-Camp-Management-System-client',
            challenges: 'Implemented JWT authentication for sensitive routes., Provided robust table management with pagination and search capabilities.',
            improvements: 'Add improvements for better user experience and performance optimization.',
        },
        {
            name: 'Next Generation',
            image: 'https://i.ibb.co.com/XZ68gXBc/Screenshot-2025-03-09-222427.png',
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Firebase'],
            description: 'This platform is designed to create an engaging blogging experience where users can read, write, and manage blogs. The platform includes features such as user authentication, blog wishlisting, comments, and dynamic content filtering.',
            liveLink: 'https://next-gen-230be.web.app/',
            githubLink: 'https://github.com/imran-information/next-generation-client',
            challenges: 'Implementing JWT authentication, ensuring secure routes, handling real-time updates for blog interactions, and managing efficient content filtering.',
            improvements: 'Future improvements for Project 3: Multi-language support, real-time notifications, improved search capabilities, and integration with a mobile app.',
        },
        {
            name: 'Car Doctor',
            image: 'https://i.ibb.co.com/zTG3BYcT/Screenshot-2025-03-09-173952.png',
            techStack: ['NextJs', 'MongoDB', 'Material UI'],
            description: 'Car Doctor is a web application built with Next.js that provides car repair services. Users can view available services, book appointments, and manage their bookings.',
            liveLink: 'https://car-doctor-next-js.vercel.app',
            githubLink: 'https://github.com/imran-information/car-doctor-next-JS',
            challenges: 'Optimized UI design.',
            improvements: "Refined the review system for better accuracy and enhanced user interaction.",
        },
        {
            name: 'Chill Gamer',
            image: 'https://i.ibb.co.com/2Ydtn6P2/Screenshot-2025-02-07-171625.png',
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
            description: 'Chill Gamer is a user-friendly game review application where users can explore and share game reviews. The platform provides an intuitive UI with features like user authentication, review management, and a personalized watchlist.',
            liveLink: 'https://chill-gamer-3528e.web.app/',
            githubLink: 'https://github.com/imran-information/chill-gamer-client',
            challenges: 'Implemented JWT authentication for sensitive routes., Provided robust table management with pagination and search capabilities.',
            improvements: 'Designed with simplicity and functionality in mind, Chill Gamer ensures a smooth experience for all users.',
        },

    ];
    const project = projects[id];

    return (
        <div className="bg-minBg text-white min-h-screen ">
            <div data-aos="zoom-in"
                data-aos-duration="1500" className="container mx-auto  py-10 px-6 lg:px-12">
                <div className="project-details bg-secondBg rounded-lg shadow-[0_0_10px_#13bbff]  border-primary-color p-6">
                    <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl font-extrabold text-center text-gray-100 mb-6 text-primary-color">{project?.name}</h2>
                    <img src={project?.image} alt={project?.name} className="w-full h-72 object-cover rounded-lg shadow-md mb-6" />
                    <p className="text-xl mb-4"><strong>Technologies Used:</strong> <span className='text-primary-color'>{project?.techStack.join(', ')}</span></p>
                    <p className="text-xl mb-6"><strong>Description:</strong> {project?.description}</p>

                    <p className="text-xl mb-6"><strong>Live Project: </strong>
                        <a href={project?.liveLink} target="_blank" className="text-[#3498db] hover:text-[#3498db] hover:underline transition-all duration-200">{project?.liveLink}</a>
                    </p>
                    <p className="text-xl mb-6"><strong>GitHub Repository: </strong>
                        <a href={project?.githubLink} target="_blank" className="text-[#3498db] hover:text-[#3498db] hover:underline transition-all duration-200">{project?.githubLink}</a>
                    </p>

                    <p className="text-xl mb-6"><strong>Challenges Faced:</strong> {project?.challenges}</p>
                    <p className="text-xl mb-6"><strong>Future Improvements:</strong> {project?.improvements}</p>
                </div>
            </div>
        </div>



    );
}

export default ProjectDetails;
