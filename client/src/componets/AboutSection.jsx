import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import meImg from '../asstes/imran-dp-white.png';
import { HashLink } from 'react-router-hash-link';

const AboutSection = () => {
    return (
        <Box className="container mx-auto py-24 gap-36 lg:flex items-center text-white px-6 lg:px-0">
            {/* Image Section */}
            <Box data-aos="zoom-in-right" data-aos-duration="1500" style={{ flex: 2, textAlign: 'center' }}>
                <img
                    src={meImg}
                    alt="Imran Hossain - Web Developer"
                    className="mb-20 lg:mb-0"
                    style={{
                        borderRadius: '20px',
                        objectFit: 'cover',
                        border: '5px solid #13bbff',
                        boxShadow: '0 0 20px #13bbff',
                        transition: 'transform 0.6s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </Box>

            {/* Information Section */}
            <Box data-aos="zoom-in-left" data-aos-duration="1500" sx={{ flex: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'start' } }}
                >
                    About <span className="text-primary-color">Me</span>
                </Typography>

                <Box mt={3} sx={{ color: '#b0bec5' }}>
                    {/* Intro */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        I'm <strong>Imran Hossain</strong>, a passionate <strong>MERN Stack Developer</strong> with a focus on building high-performance, clean, and responsive digital experiences.
                    </Typography>

                    {/* Skills & Tech */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        I specialize in turning designs into code, working with tools like <strong>HTML5, CSS3, JavaScript</strong>, and converting <strong>Figma/PSD to HTML</strong>. I also build full-stack applications using <strong>Node.js, MongoDB, React.js, Next.js</strong>, along with UI libraries like <strong>Tailwind CSS</strong> and <strong>Material UI</strong>.
                    </Typography>

                    {/* Experience */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        With <strong>1 year of experience</strong>, I've worked on diverse projects like tourism websites, SaaS dashboards, and portfolios — always aiming for clean, scalable solutions.
                    </Typography>

                    {/* Skills List */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        <strong>Core Skills:</strong>
                        <ul style={{ marginTop: '10px', paddingLeft: '1rem' }}>
                            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML</li>
                            <li><strong>Back-End:</strong> Node.js, MongoDB</li>
                            <li><strong>Frameworks & Libraries:</strong> React.js, Next.js, Material UI, Tailwind CSS</li>
                        </ul>
                    </Typography>

                    {/* Interests */}
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Outside of coding, I love <strong>traveling, photography, and football</strong>. These hobbies fuel my creativity and help me bring unique ideas into my designs.
                    </Typography>

                    {/* Contact Info */}
                    <Typography variant="body1" sx={{ mt: 3 }}>
                        <strong>Contact Info:</strong>
                        <ul style={{ marginTop: '10px', paddingLeft: '1rem' }}>
                            <li><strong>Name:</strong> Imran Hossain</li>
                            <li><strong>Experience:</strong> 1 Year</li>
                            <li><strong>Specialty:</strong> MERN Stack & UI/UX Developer</li>
                            <li><strong>Location:</strong> Mohadevpur, Naogaon, Bangladesh</li>
                            <li><strong>Email:</strong> imranme.global@gmail.com</li>
                            <li><strong>Phone:</strong> +88 01868-634721</li>
                        </ul>
                    </Typography>

                    {/* View Projects Button */}
                    <Box mt={3}>
                        <Button
                            sx={{
                                backgroundColor: '#13bbff',
                                color: '#1b1f24',
                                border: '1px solid #13bbff',
                                fontSize: '15px',
                                fontWeight: '600',
                                mt: 2,
                                transition: 'all 0.5s ease',
                                '&:hover': {
                                    backgroundColor: '#1b1f24',
                                    borderColor: '#13bbff',
                                    color: '#13bbff',
                                    boxShadow: '0 0 20px #13bbff',
                                }
                            }}
                            variant="contained"
                        >
                            <HashLink smooth to="/#project">View All Projects</HashLink>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutSection;
