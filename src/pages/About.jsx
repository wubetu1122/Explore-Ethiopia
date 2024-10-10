import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ethiopiaImage6 from "../assets/doho.jpg";
import Nav from '../components/Navigation'; // Navigation component

const About = () => {
    return (
        <div className="flex flex-col md:flex-row h-auto mx-auto max-w-7xl bg-white p-4 md:p-8">
            {/* Left Section with Nav */}
            <div className="md:w-3/5 w-full flex flex-col justify-start md:justify-center md:pt-0 pt-4">
                <Nav /> {/* Nav inside the left section */}
                
                <div className="flex-grow flex flex-col justify-between mt-4 md:mt-0">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-redish-500 font-crimson mb-4 md:mb-6">
                            ABOUT US
                        </h1>
                        <p className="text-sm md:text-base text-pencil-500 font-railway">
                            We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. This East African gem, often referred to as the "Land of Origins," is a country that promises adventure, culture, and natural beauty at every turn.
                        </p>

                        <h2 className="text-xl md:text-2xl text-pencil-500 font-extrabold mb-2 mt-4">Breathtaking Landscapes</h2>
                        <p className="text-gray-700 text-sm md:text-base mb-4 font-railway">
                            Ethiopia is renowned for its stunning landscapes that vary from towering mountains to serene lakes. The Simien Mountains, a UNESCO World Heritage site, offer some of the most spectacular views in Africa. Here, trekkers can explore rugged terrains while encountering unique wildlife, including the endangered Ethiopian wolf. Bale Mountains National Park, another natural wonder, is a haven for birdwatchers and hikers, showcasing diverse ecosystems and breathtaking scenery.
                        </p>

                        <h2 className="text-xl md:text-2xl text-pencil-500 font-extrabold mb-2 mt-4">Rich Cultural Heritage</h2>
                        <p className="text-gray-700 text-sm md:text-base mb-4">
                            Ethiopia's rich cultural heritage is one of its greatest assets. As one of the oldest nations in the world, it is home to ancient civilizations and historical landmarks that tell the story of its past. The rock-hewn churches of Lalibela, carved into solid rock in the 12th century, are a testament to the country’s architectural ingenuity and spiritual significance. These churches attract pilgrims and tourists alike, making them a must-visit for anyone seeking to understand Ethiopia’s profound cultural roots.
                        </p>

                        <Link to="/" className="inline-block mt-8 px-6 py-3 bg-redish-500 text-white font-bold text-lg rounded-md hover:bg-redish-700 transition duration-300">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-2/5 w-full flex justify-center items-center bg-white mt-8 md:mt-0">
                <div className="relative w-full max-w-md">
                    <div aria-hidden="true" className="w-full mx-auto">
                        <img src={ethiopiaImage6} alt="Scenic Landscape" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
