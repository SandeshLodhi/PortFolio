import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped} from "react-typed";

import pic from "../../public/photo.avif";
function Home() {
  return (
   <>

   <div
     name="Home"
    className="max-w-screen-2*1 container mx-auto px-4 md:px-20 my-20" >
    <div className="flex flex-col md:flex-row" >
     {/** Left Div  */}
    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1" >
    <span className="text-xl">Welcome In My Feed</span>
    <div className="flex space-x-l text-2xl md:text-4xl"><h1>Hello , I'm a </h1>
    {/*    <span className="text-red-700 font-bold">Developer</span> */}
    <ReactTyped className="text-red-700 font-bold"

          strings={["Developer","Coder", "Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

    </div>
    <br></br>
    <p className='text-sm md:text-md text-justify'>Bachelor of Technology CSE student with a solid foundation in programming and web development. 
Focused on mastering Data Structures and Algorithms for efficient problem-solving. 
Skilled in Java, C++, and the MERN stack. Eager to contribute to impactful projects as a Full Stack Developer.
</p>
<br/>
{/*Social Media */}
<div className="flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0">
<div className="space-y-2">
    <h1 className="font-bold">Availabe on </h1>
    <ul className="flex space-x-5">
      <li>
        <a href="https://www.facebook.com/" target="_blank" >
         <FaSquareFacebook className="text-2xl cursor-pointer" />
         </a>
         </li>

      <li>
           <a href="https://www.linkedin.com/in/sandesh-lodhi/" target="_blank" >
         <FaLinkedin  className="text-2xl cursor-pointer"/>
         </a>
         </li>

      <li>
          <a href="https://www.youtube.com/" target="_blank">
         <FaYoutube className="text-2xl cursor-pointer"/>
         </a>
         </li>

      <li>
          <a href="https://t.me/MESSAGE07RAJPOOT" target="_blank">
         <FaTelegram className="text-2xl cursor-pointer"/>
         </a>
         </li>
  
    </ul>
</div>
<div className="space-y-2">
 <h1 className="font-bold">Currently working  on </h1>
    <div className="flex space-x-5">
    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
    <RiReactjsFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />

      </div>
</div>
</div>


    </div>
    {/**Right Div */}
    <div className="md:w-1/2 md:ml-48 md:mt:20 mt-8 order-1">
    <img src={pic} className="rounded-full w-[450px] h-[450px]" alt=''></img>
    </div>

   </div>

    </div>
    <hr></hr>
   </>
  );
}

export default Home
