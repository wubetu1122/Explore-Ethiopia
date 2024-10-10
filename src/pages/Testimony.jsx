import { useState, useEffect } from "react";
import john from "../assets/john.jpg";
import kwame from "../assets/Kwame.jpg";
import nelson from "../assets/mandela.avif";

const Testimony = () => {
  const testimonials = [
    {
      avatar: nelson,
      name: "Nelson Mandela",
      title: "Former South Africa President",
      quote: "Ethiopia has always held a special place in my own imagination and the prospect of visiting Ethiopia attracted me more strongly than a trip to France, England, and America combined. I felt I would be visiting my own genesis, unearthing the roots of what made me an African."
    },
    {
      avatar: john,
      name: "John F. Kennedy",
      title: "Former U.S.A President",
      quote: "Ethiopia’s grandeur is not limited to its history, but extends to the rolling hills, majestic rivers, and vast plains that define this land of great beauty."
    },
    {
      avatar: kwame,
      name: "Kwame Nkrumah",
      title: "Former Ghana President",
      quote: "Ethiopia shall once more rise out of the ashes of material ruin to the heights of an African civilization which will not be a shadow of that of Europe or America, but will be uniquely African."
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically change testimonial every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => 
        (prevTestimonial + 1) % testimonials.length
      );
    }, 2000); // 2000ms = 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <ul>
            {testimonials.map((item, idx) => (
              currentTestimonial === idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-black-500 text-quote font-lora font-bold text-lg sm:text-xl lg:text-2xl">
                        “{item.quote}”
                      </p>
                    </blockquote>
                    <div className="mt-6 text-center mx-auto">
                      <img 
                        src={item.avatar} 
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto rounded-full" 
                        alt={item.name}
                      />
                      <div className="mt-3">
                        <span className="block font-raleway text-base sm:text-lg lg:text-xl text-redish-500 font-bold">
                          {item.name}
                        </span>
                        <span className="block font-lora text-gray-600 text-sm sm:text-base mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : null
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex justify-center gap-x-8 mt-8 mb-16">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full duration-150 ring-offset-2 ring-redish-500 ${currentTestimonial === idx ? "bg-redish-500 ring" : "bg-white ring"
                    }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
