import React from 'react';  

const Footer = () => {
    return (
        <footer className=' bg-blue-950 h-[70vh] flex justify-center items-center'>
            <div className=" text-white py-6 h-[40vh]  w-full">
                <div className="container mx-auto flex justify-between items-center md:w-[80vw] w-full">
                    <div>
                        <h1 className="text-3xl font-semibold mb-2">MEDDICAL</h1>
                        <p className="text-sm">Leading the Way in Medical Excellence, Trusted Care.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Important Links</h3>
                        <ul className="list-none">
                            <li><a href="#" className="text-sm hover:underline">Appointment</a></li>
                            <li><a href="#" className="text-sm hover:underline">Doctors</a></li>
                            <li><a href="#" className="text-sm hover:underline">Services</a></li>
                            <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold">Contact Us</h3>
                        <ul className="list-none">
                            <li>Call: (237) 681-812-265</li>
                            <li>Email: fildineesoe@gmail.com</li>
                            <li>Address: 0123 Some place, Some country</li>
                        </ul>
                    </div>
                    <div className='hidden'>
                        <h3 className="text-sm font-semibold">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter your email address" className="border border-gray-300 bg-blue-200 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950" />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a4.5 4.5 0 01-1.125-8.832m1.125 8.832c.007-.206.01-.413.01-6.14H2.25a2.25 2.25 0 01-2.25-2.25V11.25m18 0a2.25 2.25 0 00-2.25-2.25V11.25m18 0A2.25 2.25 0 0121.75 11.25v5.25a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-5.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200" />
                <div className="text-center text-sm">
                    &copy; 2021 Hospital's name. All Rights Reserved by PNTEC-LTD
                </div>
                <div className="flex justify-center mt-4">
                    <a href="#" className="text-white mx-2">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-white mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white mx-2">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;