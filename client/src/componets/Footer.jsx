import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1b1f24', color: 'white', py: 4, textAlign: 'center' }}>
            <Container data-aos="zoom-in"
                data-aos-duration="1500" maxWidth="md">
                <Typography variant="h6" gutterBottom>
                    © {new Date().getFullYear()} <span className='text-primary-color underline underline-offset-4'>Imran Hossain.</span> All rights reserved.
                </Typography>

                {/* Social Media Links */}
                {/* Social Media Links */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2, mt: 3 }}>
                    <IconButton
                        className="bg-minBg "
                        href="https://www.linkedin.com/in/imran-information"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: '#13bbff',
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
                        <LinkedIn />
                    </IconButton>
                    <IconButton
                        className="bg-minBg text-primary-color"
                        href="https://github.com/imran-information"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#13bbff',
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
                        <GitHub />
                    </IconButton>
                    <IconButton
                        className="bg-minBg text-primary-color"
                        href="https://x.com/imran_inf"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#13bbff',
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
                        <Twitter />
                    </IconButton>
                    <IconButton
                        className="bg-minBg text-primary-color"
                        href="https://www.facebook.com/imran.informations"
                        target="_blank"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#13bbff',
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
                        <Facebook />
                    </IconButton>
                </Box>


                {/* Footer Text */}
                <Typography variant="body2" color="gray">
                    Designed and Developed by Imran Hossain.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
