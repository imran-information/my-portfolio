import { Button } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted:", formData);
        toast.success("Thank you for your message!");
        // Clear form fields
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="p-8 py-20">
            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl font-bold mb-4 text-gray-800 text-center">Contact <span className='text-primary-color'>Me</span></h2>
            <p data-aos="fade-down" data-aos-duration="1500" className="md:px-0 lg:px-48 2xl:px-[550px]  mb-6 text-center text-dressTxt">
                Let’s build something great! Need a sleek website, responsive design, or powerful web app? I’m here to help. Reach out for collaborations, projects, or inquiries!
            </p>
            <form data-aos="zoom-in" data-aos-duration="1500" onSubmit={handleSubmit}
                className="bg-minBg p-6 border border-primary-color rounded-lg  max-w-2xl mx-auto shadow-[0_0_10px_#13bbff]"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-primary-color mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full border-2 border-primary-color rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-color bg-minBg"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-primary-color mb-1"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border-2 border-primary-color rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-color bg-minBg"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="message"
                        className="block text-sm font-semibold text-primary-color mb-1"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="w-full border-2 border-primary-color rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-color bg-minBg  "
                        required
                    ></textarea>
                </div>
                <Button sx={{
                    backgroundColor: '#1b1f24',
                    color: '#13bbff',
                    border: '2px solid #13bbff',
                    fontSize: '15px',
                    fontWeight: '600',
                    transition: 'all 0.50s ease',
                    '&:hover': {
                        backgroundColor: '#13bbff',
                        borderColor: '#13bbff',
                        color: '#1b1f24',
                        boxShadow: '0 0 20px #13bbff',

                    }
                }} type="submit"

                >
                    Submit Message
                </Button>
            </form>
        </div>
    );
};

export default ContactMe;