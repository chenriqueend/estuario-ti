import React, { useState } from "react";

export const VerticalTimeline = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="container">
      <div className="flex flex-col md:grid grid-cols-6 mx-auto p-2 text-blue-50">
        {data.map((item, index) => (
          <div key={index} className="flex md:contents">
            <div className=" translate-x-[200%] top-1/2 transform translate-y-[44%]">
              <div className="text-lg font-semibold">{item.year}</div>
            </div>
            <div className="col-start-3 col-end-5 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#DAFF00] pointer-events-none"></div>
              </div>
              <div
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white hover:bg-[#DAFF00] cursor-pointer shadow"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              ></div>
            </div>
            <div className="col-start-5 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md min-w-[550px] text-left">
              <h3
                className="font-semibold text-lg mb-1"
                style={{
                  opacity: hoverIndex === index ? 1 : 0,
                  visibility: hoverIndex === index ? "visible" : "hidden",
                }}
              >
                {item.title}
              </h3>
              <p
                className="leading-tight text-justify"
                style={{
                  opacity: hoverIndex === index ? 1 : 0,
                  visibility: hoverIndex === index ? "visible" : "hidden",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
