import React from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Instagram, GitHub, CloudDownload, Twitter } from '@mui/icons-material';
import meImg2 from '../asstes/imran-dp-white.png';
import CV from '../asstes/pexels-photo.jpg';

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
        <section id='home' className='gap-36 container mx-auto min-h-screen md:flex items-center px-4 md:px-0' >

            {/* Developer Information */}
            <div className='flex-1  '>
                <Typography variant=" h4" style={{ fontWeight: 'bold' }}>
                    Hi, There!
                </Typography>
                <Typography variant="h1" style={{ fontWeight: 'bold' }}>
                    I'm Imran
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    I’m a full-stack developer passionate about creating interactive user experiences
                    and building efficient, high-performance websites and applications. I specialize
                    in JavaScript, React, Node.js, and various modern development technologies. I love learning
                    and adapting to new challenges in the tech world.
                </Typography>


                {/* Social Media Icons */}
                <div style={{ marginTop: '15px' }}>
                    <IconButton href="https://www.linkedin.com/in/imran-information" target="_blank">
                        <LinkedIn sx={{ color: '#fff' }} />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/imran.informations" target="_blank">
                        <Facebook sx={{ color: '#fff' }} />
                    </IconButton>
                    <IconButton href="https://x.com/imran_inf" target="_blank">
                        <Twitter sx={{ color: '#fff' }} />
                    </IconButton>

                </div>

                {/* Action Buttons */}
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                    href="https://github.com/imran-information"
                    target="_blank"
                    startIcon={<GitHub />}
                >
                    GitHub
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: '20px', marginLeft: '10px' }}
                    onClick={handleDownload}
                    startIcon={<CloudDownload />}
                >
                    Download CV
                </Button>
            </div>
            {/* Developer Image */}
            <div style={{ marginRight: '20px', flex: '1' }}>
                <img
                    src={meImg2}
                    alt="Developer"
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '5px solid #fff',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                />
            </div>
        </section >
    );
};

export default MeSection;
