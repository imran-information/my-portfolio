import {
    Typography,
    Button,
    Box,
    Divider,
    Grid,
    Paper,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import meImg1 from '../asstes/imran_img1.png';
import meImg2 from '../asstes/imran_img2.jpg';
import meImg3 from '../asstes/imran_img3.png';
import meImg4 from '../asstes/imran_img4.png';
import { HashLink } from 'react-router-hash-link';
import SectionHeader from './Shared/SectionHeader/SectionHeader';
import Stack from './Stack/Stack';
import Code from '@mui/icons-material/Code';
import Storage from '@mui/icons-material/Storage';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Interests from '@mui/icons-material/Interests';
import Person from '@mui/icons-material/Person';
import Badge from '@mui/icons-material/Badge';
import WorkHistory from '@mui/icons-material/WorkHistory';
import LocationOn from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/Email';
import ComputerIcon from '@mui/icons-material/Computer';
import Phone from '@mui/icons-material/Phone';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const AboutSection = () => {
    return (
        <Box className="container mx-auto py-24 gap-36 lg:flex items-center text-white px-6 lg:px-0">
            {/* Image Section */}
            <Box
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                style={{ flex: 2, textAlign: 'center' }}
            >
                {/* Stack component with your image styling */}
                <div className="flex justify-center">
                    <Stack
                        randomRotation={true}
                        sensitivity={180}
                        sendToBackOnClick={false}
                        cardDimensions={{ width: 500, height: 500 }}
                        cardsData={[
                            {
                                id: 1,
                                img: meImg1,
                                alt: "Imran Hossain - Web Developer"
                            },
                            {
                                id: 2,
                                img: meImg2,
                                alt: "Imran Hossain - Web Developer"
                            },
                            {
                                id: 3,
                                img: meImg3,
                                alt: "Imran Hossain - Web Developer"
                            },
                            {
                                id: 4,
                                img: meImg4,
                                alt: "Imran Hossain - Web Developer"
                            }
                        ]}
                        cardStyle={{
                            borderRadius: '20px',
                            border: '3px solid #13bbff',
                            boxShadow: '0 0 20px rgba(19, 187, 255, 0.5)',
                            transition: 'all 0.6s ease-in-out',
                            cursor: 'pointer',
                        }}
                        hoverStyle={{
                            boxShadow: '0 0 30px #13bbff',
                            borderColor: '#13bbff',
                            transform: 'scale(1.1)'
                        }}
                    />
                </div>
            </Box>
            {/* Information Section */}
            {/* Information Section */}
            <Box sx={{ flex: 3 }}>
                <SectionHeader text={"About "} secondLetter={"Me"} />
                <Box data-aos="zoom-in-left" data-aos-duration="1500" mt={3}>
                    <Box sx={{
                        p: 4,
                        bgcolor: '#1b1f24',
                        borderRadius: 2,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.36)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>

                        {/* Introduction */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body1" paragraph sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: '#e0e0e0'
                            }}>
                                I'm a passionate <strong style={{ color: '#13bbff' }}>MERN Stack Developer</strong> specializing in building high-performance web applications. With expertise in both frontend and backend development, I create seamless digital experiences that are visually appealing, functionally robust, and user-friendly.
                            </Typography>
                        </Box>

                        {/* Divider */}
                        <Divider sx={{
                            my: 3,
                            bgcolor: 'rgba(255, 255, 255, 0.12)'
                        }} />

                        {/* Skills Section */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}>
                                <Code color="primary" sx={{ fontSize: 32 }} />
                                Technical Skills
                            </Typography>

                            <Grid container spacing={3}>
                                {/* Front-End */}
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={0} sx={{
                                        p: 3,
                                        height: '100%',
                                        border: '1px solid rgba(19, 187, 255, 0.2)',
                                        borderRadius: 2,
                                        bgcolor: 'rgba(19, 187, 255, 0.05)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'rgba(19, 187, 255, 0.4)',
                                            boxShadow: '0 0 20px rgba(19, 187, 255, 0.1)'
                                        }
                                    }}>
                                        <Typography variant="subtitle1" sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                            color: '#13bbff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}>
                                            <ComputerIcon sx={{ fontSize: 24 }} />
                                            Frontend Development
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Material UI', 'Tailwind CSS', 'Redux', 'Figma to HTML', 'PSD to HTML'].map(skill => (
                                                <Chip
                                                    key={skill}
                                                    label={skill}
                                                    size="medium"
                                                    sx={{
                                                        backgroundColor: 'rgba(19, 187, 255, 0.1)',
                                                        color: '#13bbff',
                                                        border: '1px solid rgba(19, 187, 255, 0.3)',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(19, 187, 255, 0.2)'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Back-End */}
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={0} sx={{
                                        p: 3,
                                        height: '100%',
                                        border: '1px solid rgba(101, 227, 179, 0.2)',
                                        borderRadius: 2,
                                        bgcolor: 'rgba(101, 227, 179, 0.05)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'rgba(101, 227, 179, 0.4)',
                                            boxShadow: '0 0 20px rgba(101, 227, 179, 0.1)'
                                        }
                                    }}>
                                        <Typography variant="subtitle1" sx={{
                                            fontWeight: 600,
                                            mb: 2,
                                            color: '#65e3b3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}>
                                            <Storage sx={{ fontSize: 24 }} />
                                            Backend Development
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Firebase', 'Postman', 'Mongoose'].map(skill => (
                                                <Chip
                                                    key={skill}
                                                    label={skill}
                                                    size="medium"
                                                    sx={{
                                                        backgroundColor: 'rgba(101, 227, 179, 0.1)',
                                                        color: '#65e3b3',
                                                        border: '1px solid rgba(101, 227, 179, 0.3)',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(101, 227, 179, 0.2)'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Experience */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}>
                                <WorkHistory color="primary" sx={{ fontSize: 32 }} />
                                Professional Experience
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                mb: 2
                            }}>
                                <Typography variant="body1" paragraph sx={{
                                    mb: 0,
                                    color: '#e0e0e0',
                                    fontSize: '1.1rem'
                                }}>
                                    With <strong style={{ color: '#13bbff' }}>1+ year</strong> of hands-on experience, I've successfully delivered projects including:
                                </Typography>
                            </Box>

                            <List dense sx={{ pl: 2 }}>
                                {[
                                    'Responsive tourism websites with booking functionality',
                                    'Interactive SaaS dashboards with real-time analytics',
                                    'Modern portfolio websites with CMS integration',
                                    'E-commerce interfaces with payment gateways'
                                ].map((item, index) => (
                                    <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <FiberManualRecord sx={{
                                                fontSize: 10,
                                                color: '#13bbff'
                                            }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                color: '#e0e0e0',
                                                fontSize: '1.05rem'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Interests */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}>
                                <Interests color="primary" sx={{ fontSize: 32 }} />
                                Personal Interests
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: 'rgba(255, 255, 255, 0.03)',
                                p: 3,
                                borderRadius: 2,
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}>
                                <Typography variant="body1" sx={{
                                    color: '#e0e0e0',
                                    fontSize: '1.1rem'
                                }}>
                                    Beyond coding, I'm passionate about <strong style={{ color: '#13bbff' }}>travel, photography</strong> and <strong style={{ color: '#13bbff' }}>football</strong>. These creative outlets inspire my design thinking and problem-solving approach in development.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Contact Information */}
                        <Box>
                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: 700,
                                mb: 3,
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5
                            }}>
                                <ContactMailIcon sx={{ fontSize: 32, color: '#13bbff' }} />
                                Contact Information
                            </Typography>

                            <Paper elevation={0} sx={{
                                p: 3,
                                border: '1px solid rgba(19, 187, 255, 0.2)',
                                borderRadius: 2,
                                bgcolor: 'rgba(19, 187, 255, 0.05)'
                            }}>
                                <Grid container spacing={0}>
                                    {[
                                        { icon: <Person sx={{ color: '#13bbff' }} />, text: 'Imran Hossain' },
                                        { icon: <Badge sx={{ color: '#13bbff' }} />, text: 'MERN Stack Developer' },
                                        { icon: <WorkHistory sx={{ color: '#13bbff' }} />, text: '1+ Year Experience' },
                                        { icon: <LocationOn sx={{ color: '#13bbff' }} />, text: 'Mohadevpur, Naogaon, Bangladesh' },
                                        { icon: <Email sx={{ color: '#13bbff' }} />, text: 'imranme.global@gmail.com' },
                                        { icon: <Phone sx={{ color: '#13bbff' }} />, text: '+88 01868-634721' },
                                    ].map((item, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                p: 1.5,
                                                borderRadius: 1,
                                                '&:hover': {
                                                    bgcolor: 'rgba(19, 187, 255, 0.1)'
                                                }
                                            }}>
                                                <Box sx={{
                                                    mr: 2,
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    bgcolor: 'rgba(19, 187, 255, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="body1" sx={{ color: '#e0e0e0' }}>
                                                    {item.text}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Box>
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
        </Box>
    );
};

export default AboutSection;