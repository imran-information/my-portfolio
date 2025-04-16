import React from 'react';

const ContactInformation = () => {
    return (
        <div className="bg-minBg text-white py-24 px-6 lg:px-0">
            <div className="container mx-auto text-center">
                <h2 data-aos="fade-down" data-aos-duration="1500" className="text-3xl font-bold mb-3">Contact <span className='text-primary-color'>information's</span></h2>
                <p data-aos="fade-down" data-aos-duration="1500" className="text-lg text-dressTxt mb-6">Feel free to reach out to me via any of the following methods:</p>

                {/* Contact Info */}
                <div data-aos="zoom-in" data-aos-duration="1500" className="grid md:grid-cols-3 gap-12">
                    {/* Email */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2 text-primary-color">📧 Email</p>
                        <a href="mailto:imranhossain0856@gmail.com" className="text-dressTxt hover:text-primary-color hover:underline">
                            imranhossain0856@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2 text-primary-color">📞 Phone</p>
                        <a href="tel:+8801722301927" className="text-dressTxt hover:text-primary-color hover:underline">
                            +88 01868-634721
                        </a>
                    </div>

                    {/* WhatsApp (optional) */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2 text-primary-color">💬 WhatsApp</p>
                        <a href="https://wa.me/+8801722301927" className="text-dressTxt hover:text-primary-color hover:underline">
                            +88 01868-634721
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;
