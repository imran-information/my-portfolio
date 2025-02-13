import React from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Instagram, GitHub, CloudDownload, Twitter } from '@mui/icons-material';
import meImg2 from '../asstes/imran-dp-white.png';
import CV from '../asstes/pexels-photo.jpg';
import TypewriterEffect from './TypewriterEffect';

const MeSection = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Imran-CV.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id='home' className='gap-36  container mx-auto min-h-screen lg:flex items-center  px-6 lg:px-0' >

            {/* Developer Information */}
            <div data-aos="zoom-in" data-aos-duration="1500" className='flex-1'>
                <Typography variant=" h4" style={{ fontWeight: 'bold' }}>
                    Hi, There!
                </Typography>
                <TypewriterEffect />
                <Typography className='text-dressTxt text-justify md:text-start' variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', lineHeight: '26px' }}>
                    I’m a MERAN Stack developer passionate about creating interactive user experiences
                    and building efficient, high-performance websites and applications. I specialize
                    in JavaScript, React, Node.js, and various modern development technologies. I love learning
                    and adapting to new challenges in the tech world.
                </Typography>


                {/* Social Media Icons */}
                <div style={{ marginTop: '15px', }} >
                    <IconButton
                        className="bg-minBg text-primary-color"
                        href="https://www.linkedin.com/in/imran-information"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backdropFilter: 'brightness(88%)',
                            fontSize: '20px',
                            marginRight: '17px',
                            boxShadow: '0 0 20px transparent',
                            cursor: 'pointer',
                            transition: 'all 0.50s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0 0 20px #13bbff',
                            },
                        }}
                    >
                        <LinkedIn sx={{ color: '#13bbff' }} />
                    </IconButton>
                    <IconButton
                        href="https://www.facebook.com/imran.informations"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backdropFilter: 'brightness(88%)',
                            fontSize: '20px',
                            marginRight: '17px',
                            boxShadow: '0 0 20px transparent',
                            cursor: 'pointer',
                            transition: 'all 0.50s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0 0 20px #13bbff',
                            },
                        }}
                    >
                        <Facebook sx={{ color: '#13bbff' }} />
                    </IconButton>
                    <IconButton
                        href="https://x.com/imran_inf"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backdropFilter: 'brightness(88%)',
                            fontSize: '20px',
                            marginRight: '17px',
                            boxShadow: '0 0 20px transparent',
                            cursor: 'pointer',
                            transition: 'all 0.50s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0 0 20px #13bbff',
                            },
                        }}
                    >
                        <Twitter sx={{ color: '#13bbff' }} />
                    </IconButton>
                </div>


                {/* Action Buttons */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#13bbff',
                        color: '#1b1f24',
                        border: '1px solid #13bbff',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginTop: '20px',
                        transition: 'all 0.50s ease',
                        '&:hover': {
                            backgroundColor: '#1b1f24',
                            borderColor: '#13bbff',
                            color: '#13bbff',
                            boxShadow: '0 0 20px #13bbff',

                        }
                    }}
                    href="https://github.com/imran-information"
                    target="_blank"
                    startIcon={<GitHub />}
                >
                    GitHub
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: '#1b1f24',
                        color: '#13bbff',
                        border: '1px solid #13bbff',
                        fontSize: '15px',
                        fontWeight: '600',
                        marginTop: '20px',
                        marginLeft: '10px',
                        transition: 'all 0.50s ease',
                        '&:hover': {
                            backgroundColor: '#13bbff',
                            borderColor: '#13bbff',
                            color: '#1b1f24',
                            boxShadow: '0 0 20px #13bbff',

                        }
                    }}
                    onClick={handleDownload}
                    startIcon={<CloudDownload />}
                >
                    Download CV
                </Button>

            </div>
            {/* Developer Image */}
            <div data-aos="zoom-in" data-aos-duration="1500" className='flex-1 py-20 lg:py-0'>
                <img
                    src={meImg2}
                    alt="Developer"
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '5px solid #13bbff',
                        boxShadow: '0 0 20px #13bbff',
                        transition: 'transform 0.6s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </div>
        </section >
    );
};

export default MeSection;
