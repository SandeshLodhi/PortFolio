import React from 'react';

function Portfolio() {
  const cardItem = [
    { id: 1, logo: "/mongodb.jpg", name: "MongoDB" },
    { id: 2, logo: "/express.png", name: "Express" },
    { id: 3, logo: "/reactjs.png", name: "ReactJS" },
    { id: 4, logo: "/node.png", name: "NodeJS" },
    { id: 5, logo: "/java.png", name: "Java"}

  ];

  return (
    <div 
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20">
      <div>
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-3 my-5">
        {
        cardItem.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
            />
            <div>
            <div className=" px-2 font-bold text-xl mb-2">{item.name}</div>
            <p className='px-2 text-gray-700'>A flexible, document-oriented NoSQL database designed for scalability and high performance. Ideal for modern applications that require dynamic schemas and real-time data processing.</p>
            </div>

            <div className='px-6 py-4 space-x-3 justify-around'> 
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'> Source Code </button>
               </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Portfolio;

