import React from 'react'
import { motion } from "framer-motion";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import pic from "../../public/SANDESH.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    
    >
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Div */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1"
          >

            <span className="text-xl font-semibold text-gray-700">
              Welcome To My Feed
            </span>

            <div className="flex flex-wrap items-center text-3xl md:text-6xl font-bold">
              <h1>Hello, I'm a</h1>

              <ReactTyped
                className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-500 to-purple-500"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={60}
                backSpeed={80}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-lg text-justify leading-7 text-gray-700">
              Hi, I’m Sandesh, a Computer Science student passionate about
              coding and web development. I am exploring Java, C++, and the
              MERN stack to strengthen my knowledge and build useful
              applications. Focused on problem-solving and real-world projects,
              I aim to grow as a full-stack developer.
            </p>

            {/* Social Media + Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-6">

              {/* Social Media */}
              <div className="space-y-3">
                <h1 className="font-bold text-lg">Available on</h1>

                <ul className="flex space-x-5">

                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaSquareFacebook className="text-3xl cursor-pointer hover:scale-125 hover:text-blue-600 duration-300" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/sandesh-lodhi/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer hover:scale-125 hover:text-blue-500 duration-300" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube className="text-3xl cursor-pointer hover:scale-125 hover:text-red-600 duration-300" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://t.me/MESSAGE07RAJPOOT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegram className="text-3xl cursor-pointer hover:scale-125 hover:text-sky-500 duration-300" />
                    </a>
                  </li>

                </ul>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h1 className="font-bold text-lg">
                  Currently working on
                </h1>

                <div className="flex space-x-5">

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <SiMongodb className="text-2xl md:text-4xl rounded-full border-2 p-1 shadow-md" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <SiExpress className="text-2xl md:text-4xl rounded-full border-2 p-1 shadow-md" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <RiReactjsFill className="text-2xl md:text-4xl rounded-full border-2 p-1 shadow-md" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <FaNodeJs className="text-2xl md:text-4xl rounded-full border-2 p-1 shadow-md" />
                  </motion.div>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Div */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="md:w-1/2 md:ml-48 mt-10 order-1"
          >
            <img
              src={pic}
              className="rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-cover shadow-2xl border-4 border-white hover:scale-105 duration-500"
              alt=""
            />
          </motion.div>

        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;