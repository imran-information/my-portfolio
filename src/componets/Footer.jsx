import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 4, textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h6" gutterBottom>
                    © {new Date().getFullYear()} Imran Hossain. All rights reserved.
                </Typography>

                {/* Social Media Links */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
                    <IconButton href="https://www.linkedin.com/in/imran-information" target="_blank" sx={{ color: '#0077b5', '&:hover': { color: '#005582' } }}>
                        <LinkedIn fontSize="large" />
                    </IconButton>
                    <IconButton href="https://github.com/imran-information" target="_blank" sx={{ color: '#ccc', '&:hover': { color: '#888' } }}>
                        <GitHub fontSize="large" />
                    </IconButton>
                    <IconButton href="https://x.com/imran_inf" target="_blank" sx={{ color: '#1DA1F2', '&:hover': { color: '#0d8de6' } }}>
                        <Twitter fontSize="large" />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/imran.informations" target="_blank" sx={{ color: '#1877F2', '&:hover': { color: '#145db2' } }}>
                        <Facebook fontSize="large" />
                    </IconButton>
                </Box>

                {/* Footer Text */}
                <Typography variant="body2" color="gray">
                    Designed and Developed by Imran Hossain
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
