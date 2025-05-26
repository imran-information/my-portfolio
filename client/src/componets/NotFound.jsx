import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { Home, ArrowBack, GitHub } from '@mui/icons-material';
import FuzzyText from './FuzzyText/FuzzyText';

const NotFound = () => {
    const [hoverIntensity, setHoverIntensity] = useState(0.5);

    return (
        <Box
            sx={{
                backgroundColor: '#1b1f24',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4
            }}
        >
            <Box
                sx={{
                    maxWidth: '800px',
                    textAlign: 'center',
                    position: 'relative'
                }}
            >
                {/* Animated Background Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at center, transparent 0%, #1b1f24 70%)`,
                        zIndex: 0,
                        opacity: 0.7
                    }}
                />

                {/* Main Content */}
                <Box position="relative" zIndex={1}>
                    {/* Interactive 404 Text */}
                    <Box
                        onMouseEnter={() => setHoverIntensity(0.8)}
                        onMouseLeave={() => setHoverIntensity(0.5)}
                        sx={{ mb: 4 }}
                    >
                        <FuzzyText
                            baseIntensity={0.2}
                            hoverIntensity={hoverIntensity}
                            enableHover={true}
                            style={{
                                fontSize: '8rem',
                                fontWeight: 'bold',
                                color: '#13bbff',
                                lineHeight: 1
                            }}
                        >
                            404
                        </FuzzyText>
                    </Box>

                    {/* Error Message */}
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 2
                        }}
                    >
                        Page Not Found
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#aaa',
                            mb: 4,
                            maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        The requested page doesn't exist or may have been moved.
                    </Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            component={Link}
                            startIcon={<Home />}
                            to="/"
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
                        >
                            Home
                        </Button>

                        <Button
                            variant="outlined"
                            component={Link}
                            to={-1} 
                            startIcon={<ArrowBack />}
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
                        >
                            Go Back
                        </Button> 
 
                    </Box>

                    {/* Tech Stack Indicator */}
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            color: '#666',
                            mt: 6,
                            fontSize: '0.8rem'
                        }}
                    >
                        MERN Stack Developer Portfolio
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NotFound;