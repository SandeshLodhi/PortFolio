import React from 'react'
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef
} from "react-icons/si";

function Certification() {

  const certifications = [
    {
      title: "MongoDB Basics for Students",
      provider: "MongoDB",
      date: "Aug 2025",
      link: "/Certificates/MongoDB.jpg",
    },
    {
      title: "Git & GitHub Certification",
      provider: "CodeChef",
      date: "Jan 2026",
      link: "/Certificates/git.pdf",
    },
    {
      title: "C++ Programming",
      provider: "Institute of Technology and Management",
      date: "April 2024",
      link: "/Certificates/cpp.pdf",
    },
  ]

  return (
    <div
      id="Certifications"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 scroll-mt-24"
    >

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 text-green-500">
        Certifications
      </h1>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {certifications.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300"
          >

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-700 font-medium">
              {item.provider}
            </p>

            <p className="text-gray-500 mt-2 mb-5">
              {item.date}
            </p>

            {/* View Button */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition duration-300"
            >
              View Certificate
            </a>

          </div>
        ))}

      </div>

      {/* Coding Profiles */}
      <div className="mt-20">

        <h2 className="text-3xl font-semibold mb-10 text-green-600">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* LeetCode */}
          <a
            href="https://leetcode.com/MessageMiles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 duration-300"
          >

            <SiLeetcode size={45} />

            <div>
              <h3 className="text-2xl font-bold">
                LeetCode
              </h3>

              <p className="text-sm opacity-90">
                View Profile
              </p>
            </div>

          </a>

          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/profile/sandeshlodhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 duration-300"
          >

            <SiGeeksforgeeks size={45} />

            <div>
              <h3 className="text-2xl font-bold">
                GeeksforGeeks
              </h3>

              <p className="text-sm opacity-90">
                View Profile
              </p>
            </div>

          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/sandesh_07123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-r from-gray-700 to-black text-white p-6 rounded-2xl shadow-lg hover:scale-105 duration-300"
          >

            <SiCodechef size={45} />

            <div>
              <h3 className="text-2xl font-bold">
                CodeChef
              </h3>

              <p className="text-sm opacity-90">
                View Profile
              </p>
            </div>

          </a>

        </div>

      </div>

    </div>
  )
}

export default Certification