import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/Abbysinia Logo.png";
import black_logo from "../assets/logo in black.png"; 
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for saved preference in local storage
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false; // Default to false if not set
    });

    useEffect(() => {
        // Update the class on the document element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save the user's preference in local storage
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white dark:bg-gray-900 -ml-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo and Links */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={isDarkMode ? black_logo : logo} alt="Abbysinia Logo" height={125} width={125} />
                    </Link>
                    <div className="hidden md:flex space-x-8 ml-10">
                        <Link
                            to="/"
                            className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium font-crafty text-16px ${isActive("/") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium font-crafty text-16px ${isActive("/about") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact" // Assuming there's a contact page
                            className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium font-crafty text-16px ${isActive("/contact") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/login" // Assuming there's a login page
                            className={`text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium font-crafty text-16px ${isActive("/login") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Log In
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className="px-4 py-2 font-semibold rounded-lg bg-gray-900 dark:bg-yellow-500 text-white dark:text-black transition duration-300 hover:bg-gray-700 dark:hover:bg-yellow-600"
                        >
                            {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700">
                    <div className="px-4 pt-4 pb-3 space-y-3 sm:px-6">
                        <Link
                            to="/"
                            className={`block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${isActive("/") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${isActive("/about") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact" // Assuming there's a contact page
                            className={`block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${isActive("/contact") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/login" // Assuming there's a login page
                            className={`block px-4 py-2 rounded-md text-base font-crafty font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${isActive("/login") ? "text-redish-500 dark:text-yellow-500" : ""}`}
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
