
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a passionate software developer with a strong background in <span className="text-white font-bold">quality inspection</span>. I spent almost two years as a quality inspector before realizing my true passion for software development. My first programming experience was in <span className="text-white font-bold">C</span> and <span className="text-white font-bold">Python</span>, but I quickly fell in love with <span className="text-white font-bold">JavaScript</span> and have been exploring its depths ever since.
          In addition to my professional experience, I'm also an active contributor to the <span className="text-white font-bold">open-source community</span>. I've contributed to the <span className="text-white font-bold">React Play</span> platform, helping to create an environment for developers to experiment with React components and build interactive UIs
          I've also had the opportunity to hone my skills through an internship at <span className="text-white font-bold">3minds Digital</span> in Mumbai. During my time there, I worked on several real-time projects, including <span className="text-white font-bold">Livit</span>, <span className="text-white font-bold">Nehaas</span>, and <span className="text-white font-bold">Oneextel</span>. These experiences have allowed me to develop a strong understanding of the software development process, from conception to deployment.
        </p>

     
      </div>
    </div>
  );
};

export default About;
