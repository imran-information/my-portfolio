import React from 'react';
import Navbar from '../componets/Navbar';
import MeSection from '../componets/MeSection';
import AboutSection from '../componets/AboutSection';
import SkillsSection from '../componets/SkillsSection';
import ProjectsSection from '../componets/ProjectsSection';
import ContactInformation from '../componets/ContactInformation';
import Footer from '../componets/Footer';
import ContactMe from '../componets/ContactMe';


const HomeLayouts = () => {
    return (
        <>
            <Navbar />
            <div className=' bg-minBg text-white pt-20 lg:pt-0'>
                <MeSection />
            </div>
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