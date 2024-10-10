import React, { useState } from 'react';
import logo from "../assets/Abbysinia Logo.png"; // replace with actual path

const Nav = () => {
    // State to toggle mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white -ml-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo and Links */}
                <div className="flex items-center">
                    <a href="#">
                        <img src={logo} alt="Abbysinia Logo" height={125} width={125} />
                    </a>
                    <div className="hidden md:flex space-x-8 ml-10">
                        <a href="/" className="text-gray-700 hover:text-gray-900 font-medium font-crafty text-16px">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium font-crafty text-16px">About</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium font-crafty text-16px">Contact Us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium font-crafty text-16px">Log In</a>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        className="text-gray-700 hover:text-gray-900 focus:outline-none" 
                        onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
                    >
                        {/* Mobile menu icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-4 pt-4 pb-3 space-y-3 sm:px-6">
                        <a href="/" className="block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 hover:text-gray-900">Home</a>
                        <a href="/about" className="block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 hover:text-gray-900">About</a>
                        <a href="#" className="block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 hover:text-gray-900">Contact Us</a>
                        <a href="#" className="block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 hover:text-gray-900">Log In</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
