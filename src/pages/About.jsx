import React from 'react';
import { Link } from 'react-router-dom';
import ethiopiaImage6 from "../assets/doho.jpg";
import Nav from '../components/Navigation';

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900"> {/* This ensures the whole screen has the background */}
            {/* Wrapper for content */}
            <div className="flex flex-col md:flex-row h-auto mx-auto max-w-7xl p-4 md:p-8">
                {/* Left Section with Nav */}
                <div className="md:w-3/5 w-full flex flex-col justify-start md:justify-center md:pt-0 pt-4">
                    <Nav /> {/* Nav inside the left section */}
                    
                    <div className="flex-grow flex flex-col justify-between mt-4 md:mt-0">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-redish-500 dark:text-yellow-500 font-crimson mb-4 md:mb-6">
                                ABOUT US
                            </h1>
                            <p className="text-sm md:text-base text-pencil-500 dark:text-gray-300 font-railway">
                                We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. This East African gem, often referred to as the "Land of Origins," is a country that promises adventure, culture, and natural beauty at every turn.
                            </p>

                            <h2 className="text-xl md:text-2xl text-pencil-500 dark:text-gray-300 font-extrabold mb-2 mt-4">Breathtaking Landscapes</h2>
                            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-4 font-railway">
                                Ethiopia is renowned for its stunning landscapes that vary from towering mountains to serene lakes. The Simien Mountains, a UNESCO World Heritage site, offer some of the most spectacular views in Africa.
                            </p>

                            <h2 className="text-xl md:text-2xl text-pencil-500 dark:text-gray-300 font-extrabold mb-2 mt-4">Rich Cultural Heritage</h2>
                            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-4">
                                Ethiopia's rich cultural heritage is one of its greatest assets. As one of the oldest nations in the world, it is home to ancient civilizations and historical landmarks that tell the story of its past.
                            </p>

                            <Link to="/" className="inline-block mt-8 px-6 py-3 bg-redish-500 dark:bg-yellow-500 text-white dark:text-black font-bold text-lg rounded-md hover:bg-redish-700 dark:hover:bg-yellow-700 transition duration-300">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-2/5 w-full flex justify-center items-center mt-8 md:mt-0">
                    <div className="relative w-full max-w-md">
                        <div aria-hidden="true" className="w-full mx-auto">
                            <img src={ethiopiaImage6} alt="Scenic Landscape" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
