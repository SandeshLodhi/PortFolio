import React from 'react'

import airbnb from "../../public/airbnb.png";
import portfolio from "../../public/portfolio.png";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const cardItem = [
    {
      id: 1,
      logo: airbnb,
      name: "Airbnb Clone",
      description:
        "A full-stack MERN rental platform with authentication, property listings, and Cloudinary integration.",
      github: "https://github.com/SandeshLodhi/Airbnb",
      live: "https://airbnb-project-phox.onrender.com/listings",
    },

    {
      id: 2,
      logo: portfolio,
      name: "Portfolio Website",
      description:
        "A modern and responsive developer portfolio built using React.js and Tailwind CSS.",
      github: "https://github.com/SandeshLodhi/PortFolio",
      live: "https://dynamic-nougat-7687eb.netlify.app/",
    },
  ];

  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 sscroll-mt-32"
      >

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            Projects
          </h1>

          <p className="text-gray-700 text-lg">
            Some of the projects I have built using modern web technologies.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {
            cardItem.map(({ id, logo, name, description, github, live }) => (

              <div
                key={id}
                className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden hover:scale-105 hover:-translate-y-2 duration-300"
              >

                {/* Image */}
                <img
                  src={logo}
                  className="w-full h-56 object-cover"
                  alt=""
                />

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    {name}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {description}
                  </p>

                  {/* Buttons */}
                  <div className="flex space-x-4 mt-6">

                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full hover:scale-105 duration-300 shadow-md">
                        <FaGithub />
                        GitHub
                      </button>
                    </a>

                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full hover:scale-105 duration-300 shadow-md">
                        <FaExternalLinkAlt />
                        Live Demo
                      </button>
                    </a>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </div>
    </>
  )
}

export default Projects