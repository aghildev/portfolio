import React from "react";
import bookmyshow from "../assets/portfolio/bookmyshow2.0.png";
import careercopilot from "../assets/portfolio/careercopilot.png";
import brushhour from "../assets/portfolio/brushhour.png";
import snaproom from "../assets/portfolio/snaproom.png";
import cuisinecompass from "../assets/portfolio/cuisinecompass.png";
import musicbox from "../assets/portfolio/musicbox.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookmyshow,
      codeLink: "https://github.com/aghildev/BMS_LST_CL",
      liveLink: "https://aghildev.github.io/BMS_LST_CL/"
    },
    {
      id: 2,
      src: snaproom,
      codeLink: "https://github.com/aghildev/photo_gen_Gallery_Api",
      liveLink: "https://aghildev.github.io/photo_gen_Gallery_Api/"
    },
    {
      id: 3,
      src: brushhour,
      codeLink: "https://github.com/aghildev/Brush-Hour",
      liveLink: "https://aghildev.github.io/Brush-Hour/"
    },
    {
      id: 4,
      src: cuisinecompass,
      codeLink: "https://github.com/aghildev/cuisuine-compass",
      liveLink: "https://steady-toffee-478d50.netlify.app/"
    },
    {
      id: 5,
      src: careercopilot,
      codeLink: "https://github.com/aghildev/career-copilot",
      liveLink: "https://careercopilot1.netlify.app"
    },
    {
      id: 6,
      src: musicbox,
      codeLink: "https://github.com/aghildev/Music-Player",
      liveLink: "https://aghildev.github.io/Music-Player/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,codeLink,liveLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                style={{ width: "100%", height: "77%" }}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
