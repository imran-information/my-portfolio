import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import meImg from '../asstes/imran-dp-white.png';
import { HashLink } from 'react-router-hash-link';

const AboutSection = () => {
    return (
        <Box className="container mx-auto py-24 gap-36 lg:flex items-center text-white px-6 lg:px-0" >
            {/* Image Section */}
            <Box data-aos="zoom-in-right" data-aos-duration="1500" style={{ flex: 2, textAlign: 'center' }}>
                <img
                    src={meImg}
                    alt="Imran Hossain - Web Developer"
                    className='mb-20 lg:mb-0'
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

                <Box mt={3}>
                    {/* Introduction */}
                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', color: '#b0bec5' }}>
                        I'm <strong>Imran Hossain</strong>, a passionate <strong>MERN Stack Developer</strong> dedicated to crafting high-performance, visually appealing digital experiences. My journey in web development began with curiosity, evolving into a professional career focused on delivering seamless and intuitive user experiences.
                    </Typography>

                    {/* Experience */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#b0bec5' }}>
                        With <strong>1 year of experience</strong>, I specialize in <strong>HTML5, CSS3, JavaScript, PSD to HTML, and Figma to HTML</strong>, ensuring responsive and interactive designs that enhance digital engagement.
                    </Typography>

                    {/* Core Skills */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#b0bec5' }}>
                        <strong>Core Skills:</strong>
                        <ul>
                            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, SCSS, PSD to HTML, Figma to HTML</li>
                            <li><strong>Back-End:</strong> Node.js, MongoDB</li>
                            <li><strong>Frameworks & Libraries:</strong> React.js, Next.js, Material UI, Tailwind CSS</li>
                        </ul>
                    </Typography>

                    {/* Passion & Approach */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#b0bec5' }}>
                        I focus on building <strong>clean, scalable, and high-performance</strong> web solutions. Whether it's a <strong>tourism website, SaaS dashboard, or portfolio</strong>, I ensure modern, intuitive user experiences.
                    </Typography>

                    {/* Personal Interests */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#b0bec5' }}>
                        Beyond development, I have a strong passion for <strong>traveling, photography, and football</strong>. Exploring new cultures and capturing moments through photography fuels my creativity, enriching my design and problem-solving approach.
                    </Typography>

                    {/* Call to Action */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#b0bec5' }}>
                        Always eager for new challenges, I'm open to collaborations and exciting projects. Let's connect and create something incredible!
                    </Typography>

                    {/* Contact Information */}
                    <Typography variant="body1" sx={{ mt: 3, color: '#b0bec5' }}>
                        <strong>Contact Information:</strong>
                        <ul>
                            <li><strong>Name:</strong> Imran Hossain</li>
                            <li><strong>Skills:</strong> HTML5, CSS3, JavaScript, PSD to HTML, Figma to HTML, Node.js, MongoDB, React.js, Next.js</li>
                            <li><strong>Experience:</strong> 1 Year</li>
                            <li><strong>Specialty:</strong> MERN Stack & UI/UX Developer</li>
                            <li><strong>Location:</strong> Mohadevpur, Naogaon, Bangladesh</li>
                            <li><strong>Email:</strong> imranhossen0856@gmail.com</li>
                            <li><strong>Phone:</strong> +88 01868-634721</li> 
                        </ul>
                    </Typography>
                </Box>

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

    );
};

export default AboutSection;