import React from 'react';
import errorImg from '../asstes/not-found.webp'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-minBg'>
            <div className="container mx-auto min-h-screen py-10">
                <Link to="/" className='font-semibold underline text-primary-color '>Back to home</Link>
                <div className="flex justify-center">
                    <img className='w-3/4' src={errorImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;