import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import meImg from '../asstes/imran-dp-white.png';
import { HashLink } from 'react-router-hash-link';

const AboutSection = () => {
    return (

        <Box className="container mx-auto py-24 gap-36 md:flex items-center text-white px-4 md:px-0" >
            {/* Image Section */}
            <Box style={{ flex: 2, textAlign: 'center' }}>
                <img
                    src={meImg}
                    alt="Imran Hossain - Web Developer"
                    style={{
                        borderRadius: '20px',
                        objectFit: 'cover',
                        border: '3px solid #3498db', // Blue border
                        transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </Box>

            {/* Information Section */}
            <Box style={{ flex: 3 }}>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                    About Me
                </Typography>

                <Box mt={3}>
                    <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', color: '#b0bec5' }}>
                        I'm <strong>Imran Hossain</strong>, a passionate <strong>Web Developer</strong> with a deep commitment to crafting visually appealing, high-performance digital experiences. My journey in web development began with an eagerness to understand how websites function, and over time, I have transformed that curiosity into a professional career.
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        With <strong>two years of experience</strong>, I have developed expertise in <strong>HTML5, CSS3, JavaScript, PSD to HTML, and Figma to HTML with Responsive Design</strong>. My focus is on building seamless, intuitive user experiences that elevate digital interactions. Additionally, I have foundational knowledge in <strong>PHP and WordPress</strong>, complementing my front-end capabilities.
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        <strong>My Core Skills:</strong>
                        <ul>
                            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML</li>
                            <li><strong>Back-End:</strong> Node.js, MongoDB</li>
                            <li><strong>Frameworks & Libraries:</strong> React.js, Next.js, Material UI, Tailwind CSS</li>
                        </ul>
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        I am dedicated to delivering <strong>clean, scalable, and high-performance</strong> web solutions. Whether developing a <strong>tourism website, SaaS dashboard, or portfolio</strong>, my goal is to ensure an exceptional user experience with a modern and intuitive interface.
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        Outside of web development, I have a strong passion for <strong>traveling, photography, and football</strong>. Exploring new cultures and capturing moments through photography fuels my creativity, enriching the way I approach design and problem-solving in development.
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        I am always eager to take on new challenges, expand my expertise, and collaborate on exciting projects. Let's connect and create something incredible together!
                    </Typography>

                    {/* Contact Information */}
                    <Typography variant="body1" style={{ marginTop: '10px', color: '#b0bec5' }}>
                        <strong>Contact Information:</strong>
                        <ul>
                            <li><strong>Name:</strong> Imran Hossain</li>
                            <li><strong>Skills:</strong> HTML5, CSS3, JavaScript,  PSD to HTML, Figma to HTML, Node.js, MongoDB, React.js, Next.js</li>
                            <li><strong>Experience:</strong> 1 Years</li>
                            <li><strong>Specialty:</strong> Web Developer</li>
                            <li><strong>Address:</strong> Mohadevpur, Naogaon, Bangladesh</li>
                            <li><strong>Email:</strong> imranhossain0856@gmail.com</li>
                            <li><strong>Phone:</strong> +88 01868-634721</li>
                            <li><strong>Freelance:</strong> Currently working on Upwork</li>
                        </ul>
                    </Typography>
                </Box>

                <Box mt={3}>
                    <Button variant="contained" color="primary">
                        <HashLink smooth to="/#project">View All Projects</HashLink>
                    </Button>
                </Box>

            </Box>
        </Box>

    );
};

export default AboutSection;