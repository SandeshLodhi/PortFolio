import React from 'react'

import heg from "../../public/HEG.webp";

function Experience() {

  const experienceData = [
    {
      id: 1,
      logo: heg,
      company: "HEG Ltd",
      role: "Web Developer Intern",
      duration: "April 2026 - May 2026",
      description:
        "Worked on developing and optimizing responsive React.js web applications with reusable components and improved user experience.",
    },
  ];

  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 scroll-mt-32"
      >

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            Experience
          </h1>

          <p className="text-gray-700 text-lg">
            My professional experience and internship journey.
          </p>

        </div>

        {/* Experience Cards */}
        <div className="space-y-8">

          {
            experienceData.map(({ id, logo, company, role, duration, description }) => (

              <div
                key={id}
                className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 hover:scale-[1.02] hover:-translate-y-1 duration-300"
              >

                <div className="flex flex-col md:flex-row md:items-center gap-6">

                  {/* Company Logo */}
                  <div className="flex justify-center md:justify-start">

                    <img
                      src={logo}
                      className="w-24 h-24 rounded-2xl object-cover shadow-md"
                      alt=""
                    />

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {role}
                    </h2>

                    <h3 className="text-xl text-green-600 font-semibold mt-1">
                      {company}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {duration}
                    </p>

                    <p className="text-gray-700 mt-4 leading-7">
                      {description}
                    </p>

                    {/* Highlights */}
                    <ul className="list-disc ml-5 mt-4 text-gray-700 space-y-2">

                      <li>
                        Developed responsive React.js UI components.
                      </li>

                      <li>
                        Improved frontend performance and application structure.
                      </li>

                      <li>
                        Worked with Git and GitHub for collaboration and version control.
                      </li>

                    </ul>

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

export default Experience