import React from 'react';

function About() {
  return <div 
  name="About"
  className="max-w-screen-2*1 container mx-auto px-4 md:px-20 my-16">
    <div>
       <h1 className='text-3xl font-bold mb-5'>About</h1>
     <p>
     I am a Computer Science student passionate about learning and applying new technologies.
    Currently exploring Java, C++, and the MERN stack to gain practical development experience.
    I enjoy solving problems and building projects that turn ideas into real-world solutions.
    With continuous learning, I aim to grow as a full-stack developer and contribute meaningfully through technology.
     </p>
     <br>
     </br>


    <h1 className='text-green-600 font-semibold text-xl'>Education & Training </h1>
    <span>
    B.Tech in Computer Science – ITM Group of Institutions, Gwalior (2023–2027).
    <p>C++ Certification – TAP Cell, ITM (2023).</p>
    </span>
    <br></br>
    <br></br>


    {/* Skiils  Sections */}
    <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
    <div className="whitespace-pre-line text-gray-800 text-base font-medium">
    <p>Programming: C, C++, Java</p>
    <p>Web Development: HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, MongoDB</p>
    <p> Problem-Solving: Data Structures & Algorithms with Java.</p>
    <p>Tools & Plateforms: Git & GitHub.</p>
    </div>
    <br></br>
    <br></br>



    <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
 <div>
  <p>Airbnb Clone (June 2025)</p>
  <p>Developed a responsive full-stack Airbnb clone using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
  <ul className="list-disc ml-6 text-black">
  {/*<li>Airbnb Clone (June 2025)</li>
  <li>Developed a responsive full-stack Airbnb clone using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>  */}
  <li>Implemented secure user authentication, property listings, and booking functionality.</li>
  <li>Integrated dynamic search filters and detailed listing pages for enhanced user experience.</li>
  <li>Built RESTful APIs and handled real-time data storage with MongoDB.                </li>
</ul> <br></br>

<p> Portfolio Website – Personal Project  </p>
  <p> Developed a responsive personal portfolio website using React and Tailwind CSS.</p>
  <ul className="list-disc ml-6 text-black">
  <li>Designed modern and responsive UI for desktop and mobile devices.</li>
  <li>Implemented dynamic sections to showcase projects, skills, and contact information.</li>
  <li>Built RESTful APIs and handled real-time data storage with MongoDB</li>
  <li>Enhanced user experience with smooth navigation and interactive elements.</li>
</ul>
</div>
 <br></br>
<br></br>


    <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
    <span>
    Solved 350+ DSA problems in Java, covering arrays, linked lists, trees, graphs, dynamic programming, and more, strengthening problem-solving and coding skills.
    </span>
    <br></br>
    <br></br>


       <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
    <span>
    I build impactful projects by leveraging my coding and problem-solving skills, while continuously growing as a full-stack developer.
    </span>

    </div>


     </div>
    
  
}

export default About;
