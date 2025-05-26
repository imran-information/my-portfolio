import React from 'react';
import Navbar from '../componets/Navbar';
import MeSection from '../componets/MeSection';
import AboutSection from '../componets/AboutSection';
import SkillsSection from '../componets/SkillsSection';
import ProjectsSection from '../componets/ProjectsSection';
import ContactInformation from '../componets/ContactInformation';
import Footer from '../componets/Footer';
import ContactMe from '../componets/ContactMe';
import ParticlesBg from '../componets/Particles/ParticlesBg';


const HomeLayouts = () => {
    return (
        <>
            <Navbar />
            {/* <div className=' bg-minBg text-white pt-20 lg:pt-0'> 
                <MeSection />
            </div> */}
            <section className="bg-minBg text-white pt-20 lg:pt-0 relative"> 
                <div className="absolute inset-0 z-0">
                    <ParticlesBg
                        particleColors={['#13bbff', '#13bbff']}
                        particleCount={300}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div> 
                <div className="relative z-10 h-screen flex items-center">
                    <MeSection />
                </div>
            </section>
            <div id='about' className="bg-secondBg">
                <AboutSection />
            </div>
            <div id='skills' className="bg-minBg text-white">
                <SkillsSection />
            </div>
            <div id='project' className="bg-secondBg text-white">
                <ProjectsSection />
            </div>
            <div id='contact' className="bg-minBg text-white">
                <ContactInformation />
            </div>
            <div id='contact' className="bg-secondBg text-white">
                <ContactMe />
            </div>
            <Footer />
        </>
    );
};

export default HomeLayouts;