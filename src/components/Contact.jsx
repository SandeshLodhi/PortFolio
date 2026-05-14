import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import { useForm } from "react-hook-form";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    try {

      await axios.post(
        "https://getform.io/f/anlnlgza",
        userInfo
      );

      toast.success("Your message has been sent successfully");

      reset();

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 scroll-mt-32"
      >

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text">
            Contact
          </h1>

          <p className="text-gray-700 text-lg">
            Feel free to connect with me for opportunities,
            collaborations, or project discussions.
          </p>

        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 md:p-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Let's Connect
              </h2>

              <p className="text-gray-600 mt-4 leading-7">
                I am always open to discussing new projects,
                internship opportunities, and creative ideas.
              </p>

            </div>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-4 rounded-full">
                  <FaEnvelope className="text-2xl text-green-600" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="font-semibold text-gray-800">
                    sandeshlodhi91@gmail.com
                  </p>
                </div>

              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-4 rounded-full">
                  <FaLinkedin className="text-2xl text-blue-600" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sandesh-lodhi/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-800 hover:text-blue-600 duration-300"
                  >
                    linkedin.com/in/sandesh-lodhi
                  </a>
                </div>

              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">

                <div className="bg-gray-200 p-4 rounded-full">
                  <FaGithub className="text-2xl text-black" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/SandeshLodhi"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-gray-800 hover:text-black duration-300"
                  >
                    github.com/SandeshLodhi
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              {/* Name */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                />

                {
                  errors.name &&
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                }

              </div>

              {/* Email */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                />

                {
                  errors.email &&
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                }

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full px-5 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                ></textarea>

                {
                  errors.message &&
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                }

              </div>

              {/* Button */}
              <button
                type='submit'
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 duration-300 shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Contact;