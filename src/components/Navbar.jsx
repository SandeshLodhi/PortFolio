import React, { useState } from 'react'
import pic from "../../public/SANDESH.png"

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';

function Navbar() {

  const [menu, setMenu] = useState(false);

 const navItems = [
  {
    id: 1,
    text: "Home"
  },
  {
    id: 2,
    text: "About"
  },
  {
    id: 3,
    text: "Skills"
  },
  {
    id: 4,
    text: "Projects"
  },
  {
    id: 5,
    text: "Experience"
  },
  {
    id: 6,
    text: "Certifications"
  },
  {
    id: 7,
    text: "Resume"
  },
  {
    id: 8,
    text: "Contact"
  },
]

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">

        <div className='flex justify-between items-center h-20'>

          {/* Logo Section */}
          <div className='flex space-x-3 items-center group cursor-pointer'>

            <img
              src={pic}
              className='h-14 w-14 rounded-full border-2 border-green-500 shadow-md group-hover:scale-110 duration-300'
              alt=""
            />

            <div>
              <h1 className='font-bold text-2xl'>
                Sandes
                <span className='text-green-500'>h</span>
              </h1>

              <p className='text-sm text-gray-600 font-medium'>
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className='hidden md:flex space-x-10 text-lg font-semibold tracking-wide'>

              {
                navItems.map(({ id, text }) => (

                  <li
                    className='cursor-pointer hover:text-green-500 transition-all duration-300 relative group'
                    key={id}
                  >

                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      activeClass='active'
                    >
                      {text}
                    </Link>

                    <span className='absolute left-0 -bottom-1 h-[3px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full'></span>

                  </li>
                ))
              }

            </ul>

            {/* Mobile Menu Icon */}
            <div
              onClick={() => setMenu(!menu)}
              className='md:hidden cursor-pointer'
            >
              {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
            </div>

          </div>

        </div>

        {/* Mobile Navbar */}
        {
          menu && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg rounded-b-2xl">

              <ul className='flex flex-col h-screen items-center justify-center space-y-8 text-2xl font-semibold'>

                {
                  navItems.map(({ id, text }) => (

                    <li
                      className='hover:text-green-500 hover:scale-110 duration-300 cursor-pointer'
                      key={id}
                    >

                      <Link
                        onClick={() => setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                      >
                        {text}
                      </Link>

                    </li>
                  ))
                }

              </ul>

            </div>
          )
        }

      </div>
    </>
  )
}

export default Navbar