import React from 'react'

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa6';

function Footer() {

  return (
    <>
      <footer className='mt-20 scroll-mt-24'>

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        <hr></hr>
          <div className='flex flex-col items-center justify-center text-center'>
             
              <p className="text-gray-600 text-sm">
                © 2026 Sandesh. All rights reserved.
              </p>

              <p className="text-gray-500 text-sm">
                Designed & Developed with ❤️ using React & Tailwind CSS.
              </p>

            </div>

          </div>

        

      </footer>
    </>
  )
}

export default Footer