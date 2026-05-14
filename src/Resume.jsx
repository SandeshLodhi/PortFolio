import React from 'react'

function Resume() {
  return (
    <div
      id="Resume"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <h1 className="text-4xl font-bold mb-4 text-green-500">
        Resume
      </h1>

      <p className="text-gray-600 mb-8">
        View or download my latest resume.
      </p>

      <div className="flex flex-wrap gap-5">

        {/* View Button */}
        <a
          href="/Sandesh_Lodhi_Full_Stack_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          View Resume
        </a>

        {/* Download Button */}
        <a
          href="/Sandesh_Lodhi_Full_Stack_Developer.pdf"
          download
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Download Resume
        </a>

      </div>
    </div>
  )
}

export default Resume