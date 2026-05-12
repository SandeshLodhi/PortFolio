import React from 'react';

function About() {
  return (
    <>
      <div
        name="About"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >

        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12">

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            About
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-md md:text-lg leading-7">
          I am an aspiring Full Stack Developer (MERN) with a strong interest in building scalable and user-friendly web applications. Skilled in Java, C++, and modern web technologies, I continuously work on improving my problem-solving abilities and development skills through hands-on projects and practical learning.
          </p>

          {/* Education */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Education
            </h2>

            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md duration-300">
              <p className="text-lg font-semibold">
                B.Tech in Computer Science Engineering
              </p>

              <p className="text-gray-700">
                Institute of Technology and Management, Gwalior
              </p>

              <p className="text-gray-500">
                2023 - 2027
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4">

              <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium hover:scale-105 duration-300">
                MERN Stack
              </span>

              <span className="px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium hover:scale-105 duration-300">
                Java
              </span>

              <span className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:scale-105 duration-300">
                DSA
              </span>

              <span className="px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium hover:scale-105 duration-300">
                React.js
              </span>

              <span className="px-5 py-2 bg-pink-100 text-pink-700 rounded-full font-medium hover:scale-105 duration-300">
                Node.js
              </span>

              <span className="px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:scale-105 duration-300">
                MongoDB
              </span>

            </div>
          </div>

          {/* Achievements */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300">
                <h1 className="text-3xl font-bold text-green-500">
                  180+
                </h1>

                <p className="text-gray-700 mt-2">
                  DSA Problems Solved
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300">
                <h1 className="text-3xl font-bold text-cyan-500">
                  Full Stack
                </h1>

                <p className="text-gray-700 mt-2">
                  MERN Projects Developed
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;