import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ethiopiaImage2 from "../assets/Biherawi.jpg";
import ethiopiaImage5 from "../assets/blue-nile.jpg";
import ethiopiaImage4 from "../assets/dalol.jpg";
import ethiopiaImage1 from "../assets/Danakil.jpg";
import ethiopiaImage3 from "../assets/Gondar.jpg";
import ethiopiaImage6 from "../assets/Lalibela.jpg";
import ethiopiaImage7 from "../assets/wenchi.jpg";
import Nav from '../components/Navigation';
import Testimony from './Testimony';

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-screen mx-auto max-w-7xl bg-white p-4 md:p-8">
            {/* Left Section */}
            <div className="md:w-3/5 w-full flex flex-col justify-start md:justify-center md:pt-0 pt-4">
                <Nav />
                <div className="flex-grow flex flex-col justify-between mt-4 md:mt-0" style={{ minHeight: '400px' }}>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-redish-500 font-crimson mb-4 md:mb-6">
                            EXPLORE ETHIOPIA
                        </h1>
                        <p className="text-base md:text-lg text-pencil-500 font-railway mb-8 md:mb-12">
                            Step into Ethiopia, a country where every corner tells a story, from ancient empires to modern-day marvels.
                            A land of rich history, diverse wildlife, and awe-inspiring natural wonders waiting to be explored.
                            A journey through time, from the birthplace of humanity to the vibrant traditions that thrive today.
                        </p>
                    </div>
                    <Testimony />
                </div>
            </div>

            {/* Right Section - Image Carousel */}
            <div className="md:w-2/5 w-full flex justify-center items-start bg-white mt-8 md:mt-0">
                <div className="relative w-full">
                    <div aria-hidden="true" className="w-full mx-auto">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-4">
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-4 sm:mt-16">
                                    <img src={ethiopiaImage1} alt="Attraction 1" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-4">
                                    <img src={ethiopiaImage2} alt="Attraction 2" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-4">
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-0 sm:-mt-12">
                                    <img src={ethiopiaImage3} alt="Attraction 3" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-4">
                                    <img src={ethiopiaImage4} alt="Attraction 4" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full sm:w-52 h-64 rounded-lg overflow-hidden mt-4">
                                    <img src={ethiopiaImage5} alt="Attraction 5" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-4">
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-4 sm:mt-16">
                                    <img src={ethiopiaImage6} alt="Attraction 6" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full sm:w-52 h-72 rounded-lg overflow-hidden mt-4">
                                    <img src={ethiopiaImage7} alt="Attraction 7" className="w-full h-full object-cover" />
                                </div>
                                {/* Learn More Button */}
                                <div className="mt-8 sm:mt-16 flex justify-center">
                                    <Link to="/about"> {/* Use Link to navigate to the about page */}
                                        <button className="bg-redish-500 text-white text-lg font-lora font-bold py-2 px-4 rounded-lg hover:bg-redish-700 transition duration-300">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
