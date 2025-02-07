import { Button } from '@mui/material';
import React from 'react';
import CV from '../asstes/pexels-photo.jpg';
import { CloudDownload } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const links = <>
        <li><HashLink smooth to="/#home">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#skills">Skills</HashLink></li>
        <li><HashLink smooth to="/#project">Project</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
    </>

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Imran-CV.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='sticky top-0 z-50 bg-minBg text-white'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Developer </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
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
            </div>
        </div>
    );
};

export default Navbar;