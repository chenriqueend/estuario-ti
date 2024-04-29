import React from "react";

export const DataDisplay = () => {
  // Dados de exemplo para serem exibidos
  const data = [
    { title: "12+", value: "anos de experiência no mercado" },
    { title: "2000+", value: "projetos entregues e aprovados" },
    { title: "200+", value: "empresas parceiras%" },
    { title: "10+", value: "países atendidos" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className={`m-2 p-4 shadow-lg border-[#F3F3F3] text-center w-[18.75rem] md:w-auto${
            index !== data.length - 1 ? " md:border-r-[1px] border-b-[1px]" : ""
          } md:last:border-r-0  md:border-b-0`}
        >
          <div className="text-6xl font-bold text-[#DAFF00] whitespace-nowrap">
            {item.title}
          </div>
          <div className="text-xl text-white whitespace-nowrap">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};
