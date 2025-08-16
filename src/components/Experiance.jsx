import React from 'react';

function Experiance() {
  const cardItem = [
    { id: 1, logo: "/html.png", name: "HTML" },
    { id: 2, logo: "/css.jpg", name: "CSS" },
    { id: 3, logo: "/javascript.png", name: "JavaScript" },
    { id: 4, logo: "/java.png", name: "Java" }

  ];

  return (
    <div 
    name="Experience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
      <h1 className="text-3xl font-bold mb-5">Experiance</h1>
      <p className="">I've more than 1 year experiance in below technologies.</p>

      <div className="grid grid-cols-2  md:grid-cols-5 gap-7 my-3">
        {
        cardItem.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border-[2px] rounded-full w-100px md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
          >
            <img
              src={item.logo}
              alt=""
              className="w-[150px]  rounded-full "
            />
           <div className="">{item.name}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Experiance;

