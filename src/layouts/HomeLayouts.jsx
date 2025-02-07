import React from 'react';
import Navbar from '../componets/Navbar';
import MeSection from '../componets/MeSection';
import AboutSection from '../componets/AboutSection';
import SkillsSection from '../componets/SkillsSection';
import ProjectsSection from '../componets/ProjectsSection';
import ContactInformation from '../componets/ContactInformation';
import Footer from '../componets/Footer';


const HomeLayouts = () => {
    return (
        <>
            <Navbar />
            <div className=' bg-minBg text-white'>
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
            <Footer />
        </>
    );
};

export default HomeLayouts;