import { Button, IconButton } from '@mui/material';
import { LinkedIn, Facebook, GitHub, CloudDownload, Twitter } from '@mui/icons-material';
import TypewriterEffect from './TypewriterEffect';
import SplitText from './SplitText/SplitText';
import BlurText from './BlurText/BlurText';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DownloadCvButton from './Shared/DownloadCvButton/DownloadCvButton';

const MeSection = () => {

    // Tech stack data
    const techStack = [
        { name: 'react', label: 'React' },
        { name: 'nodejs', label: 'Node.js' },
        { name: 'mongodb', label: 'MongoDB' },
        { name: 'express', label: 'Express' },
        { name: 'javascript', label: 'JavaScript' },
        { name: 'materialui', label: 'Material UI' }
    ];

    return (
        <section id='home' className='gap-36  container mx-auto min-h-screen lg:flex items-center  px-6 lg:px-0' >
            {/* Developer Information */}
            <div data-aos="zoom-in" data-aos-duration="1500" className='flex-1'>
                <SplitText
                    text="Hi, There!"
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
                <TypewriterEffect />
                <BlurText
                    text="I'm a MERN Stack developer passionate about creating interactive user experiences
  and building efficient, high-performance websites and applications. I specialize
  in JavaScript, React, Node.js, and various modern development technologies. I love learning
  and adapting to new challenges in the tech world."
                    delay={30}
                    animateBy="words"
                    className="text-lg font-extralight"
                />
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

                <div className="flex items-center gap-4 mt-5">
                    {/* Action Buttons */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#13bbff',
                            color: '#1b1f24',
                            border: '1px solid #13bbff',
                            fontSize: '15px',
                            fontWeight: '600', 
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

                    {/* Download Cv Button */}
                    <DownloadCvButton />
                </div>

            </div>

            {/* Tech Orb */}
            <div data-aos="zoom-in" data-aos-duration="1500" className='flex-1 py-20 lg:py-0 flex justify-center items-center'>
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] cursor-pointer group">
                    {/* Glowing Base */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#13bbff10] to-[#13bbff03] backdrop-blur-sm border-2 border-[#13bbff] shadow-[0_0_40px_#13bbff30] transition-all duration-500 group-hover:shadow-[0_0_60px_#13bbff50]"></div>

                    {/* Animated Particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                        {[...Array(24)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-[#13bbff]"
                                style={{
                                    width: `${Math.random() * 12 + 6}px`,
                                    height: `${Math.random() * 12 + 6}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random() * 0.6 + 0.2,
                                    animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                                    animationDelay: `${Math.random() * 5}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Rotating Tech Icons with Enhanced Hover Spread Effect */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                className="absolute left-1/2 top-1/2 w-16 h-16 flex flex-col items-center justify-center"
                                style={{
                                    transform: `
              translate(-50%, -50%) 
              rotate(${i * (360 / techStack.length)}deg) 
              translateY(-140px) 
              rotate(-${i * (360 / techStack.length)}deg)
            `
                                }}
                                whileHover={{
                                    y: -30,
                                    scale: 1.3,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`}
                                    alt={tech.label}
                                    className="w-10 h-10 transition-all duration-300 group-hover:scale-125 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_#13bbff]"
                                />
                                <span className="text-xs text-[#13bbff] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {tech.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 text-center">
                            <div className="text-5xl font-bold text-[#13bbff] mb-3">IMRAN</div>
                            <div className="text-sm text-white/80 tracking-wider">MERN STACK DEVELOPER</div>
                        </div>
                    </div>

                    {/* Pulsing Connection Lines */}
                    <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-b from-[#13bbff] to-transparent origin-top transition-all duration-500 group-hover:h-40 group-hover:opacity-60"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                                    opacity: 0.4,
                                    animation: `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section >
    );
};

export default MeSection;
