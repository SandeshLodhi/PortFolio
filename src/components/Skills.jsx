import React from 'react';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      id: 1,
      logo: <FaHtml5 className="text-6xl text-orange-500" />,
      name: "HTML5",
    },

    {
      id: 2,
      logo: <FaCss3Alt className="text-6xl text-blue-500" />,
      name: "CSS3",
    },

    {
      id: 3,
      logo: <SiJavascript className="text-6xl text-yellow-400" />,
      name: "JavaScript",
    },

    {
      id: 4,
      logo: <FaReact className="text-6xl text-cyan-500" />,
      name: "React.js",
    },

    {
      id: 5,
      logo: <SiTailwindcss className="text-6xl text-sky-400" />,
      name: "Tailwind CSS",
    },

    {
      id: 6,
      logo: <FaNodeJs className="text-6xl text-green-500" />,
      name: "Node.js",
    },

    {
      id: 7,
      logo: <SiExpress className="text-6xl text-gray-700" />,
      name: "Express.js",
    },

    {
      id: 8,
      logo: <SiMongodb className="text-6xl text-green-600" />,
      name: "MongoDB",
    },

    {
      id: 9,
      logo: <SiMysql className="text-6xl text-blue-600" />,
      name: "MySQL",
    },

    {
      id: 10,
      logo: <FaGithub className="text-6xl text-black" />,
      name: "GitHub",
    },

    {
      id: 11,
      logo: <FaJava className="text-6xl text-red-500" />,
      name: "Java",
    },

    {
      id: 12,
      logo: <SiCplusplus className="text-6xl text-blue-600" />,
      name: "C++",
    },

    {
      id: 13,
      logo: <SiC className="text-6xl text-blue-500" />,
      name: "C",
    },
  ];

  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            Skills
          </h1>

          <p className="text-gray-700 text-lg">
            Technologies and tools I work with to build modern web applications.
          </p>

        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map(({ id, logo, name }) => (

            <div
              key={id}
              className="bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-6 flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-2 duration-300 cursor-pointer"
            >

              <div className="mb-4">
                {logo}
              </div>

              <h2 className="text-lg font-semibold text-gray-700">
                {name}
              </h2>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Skills;