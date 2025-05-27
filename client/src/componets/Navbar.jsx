import { Button } from '@mui/material'; 
import { CloudDownload } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import DownloadCvButton from './Shared/DownloadCvButton/DownloadCvButton';

const Navbar = () => {
    const location = useLocation();

    const links = <>
        <li>
            <HashLink
                smooth
                to="/#home"
                className={`transition-colors duration-300 font-bold ${location.hash === '#home' ? 'text-primary-color' : 'hover:text-primary-color'}`}
            >
                Home
            </HashLink>
        </li>
        <li>
            <HashLink
                smooth
                to="/#about"
                className={`transition-colors duration-300 font-bold ${location.hash === '#about' ? 'text-primary-color' : 'hover:text-primary-color'}`}
            >
                About
            </HashLink>
        </li>
        <li>
            <HashLink
                smooth
                to="/#skills"
                className={`transition-colors duration-300 font-bold ${location.hash === '#skills' ? 'text-primary-color' : 'hover:text-primary-color'}`}
            >
                Skills
            </HashLink>
        </li>
        <li>
            <HashLink
                smooth
                to="/#project"
                className={`transition-colors duration-300 font-bold ${location.hash === '#project' ? 'text-primary-color' : 'hover:text-primary-color'}`}
            >
                Projects
            </HashLink>
        </li>
        <li>
            <HashLink
                smooth
                to="/#contact"
                className={`transition-colors duration-300 font-bold ${location.hash === '#contact' ? 'text-primary-color' : 'hover:text-primary-color'}`}
            >
                Contact
            </HashLink>
        </li>
    </>

    

    return (
        <div className='fixed z-50 w-full bg-minBg text-white'>
            <div className="navbar px-0 container mx-auto py-3">
                <div data-aos="fade-right" data-aos-duration="1500" className="navbar-start">
                    <div className="dropdown">
                        <div data-aos="fade-down" data-aos-duration="1500" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul data-aos="fade-down" data-aos-duration="1500"
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-secondBg rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <HashLink smooth to="/#home" className="text-2xl md:text-4xl font-bold hover:text-primary-color transition-colors duration-300">Developer <span className='text-primary-color'>I.</span></HashLink>
                </div>
                <div data-aos="fade-down" data-aos-duration="1500" className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="navbar-end">
                     <DownloadCvButton/>
                </div>

            </div>
        </div>
    );
};

export default Navbar;