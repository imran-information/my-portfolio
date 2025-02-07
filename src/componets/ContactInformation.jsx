import React from 'react';

const ContactInformation = () => {
    return (
        <div className="bg-minBg text-white py-24">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg mb-6">Feel free to reach out to me via any of the following methods:</p>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Email */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2">📧 Email</p>
                        <a href="mailto:imranhossain0856@gmail.com" className="text-blue-500 hover:text-blue-700">
                            imranhossain0856@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2">📞 Phone</p>
                        <a href="tel:+8801722301927" className="text-blue-500 hover:text-blue-700">
                            +88 01868-634721
                        </a>
                    </div>

                    {/* WhatsApp (optional) */}
                    <div className="contact-item">
                        <p className="text-xl font-semibold mb-2">💬 WhatsApp</p>
                        <a href="https://wa.me/+8801722301927" className="text-blue-500 hover:text-blue-700">
                            +88 01868-634721
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;
