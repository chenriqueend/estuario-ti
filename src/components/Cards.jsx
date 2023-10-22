import React from "react";

const Cards = () => {
  return (
    <div className="w-full pb-48 px-4 bg-[#112329]">
      <div className="py-10">
        <p className="text-center font-sans text-24 font-light text-white pb-12">
          No Brasil, os incidentes de segurança aumentaram significativamente
          nos últimos três anos.
          <br /> Seu negócio possui um nível de segurança para evitar invasões e
          que os seus dados não sejam expostos?
        </p>
        <p className="text-center font-sans text-12 font-light text-lima">
          As metodologias de testes de intrusão da EstuárioTI fornecem uma
          abordagem consistente para garantir resultados completos e detalhados
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#253D47]">
          <h2 className="text-2xl font-bold text-center py-8"></h2>
          <p className="text-center text-4xl font-bold"></p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8"></p>
            <p className="py-2 mx-8"></p>
            <p className="py-2 mx-8"></p>
          </div>
          <button className="bg-[#DAFF00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Saiba mais
          </button>
        </div>
        <div className="w-full shadow-xl bg-[#253D47] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8"></h2>
          <p className="text-center text-4xl font-bold"></p>
          <div className="text-center font-medium">
            <p className="py-2  mx-8 mt-8"></p>
            <p className="py-2  mx-8"></p>
            <p className="py-2 mx-8"></p>
          </div>
          <button className="bg-[#112329] text-[#DAFF00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Saiba mais
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#253D47]">
          <h2 className="text-2xl font-bold text-center py-8"></h2>
          <p className="text-center text-4xl font-bold"></p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8"></p>
            <p className="py-2 mx-8"></p>
            <p className="py-2 mx-8"></p>
          </div>
          <button className="bg-[#DAFF00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
