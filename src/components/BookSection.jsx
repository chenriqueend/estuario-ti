import React from "react";
import bookCover from "../assets/COVER - EBOOK 02.png";

const BookSection = () => {
  return (
    <section id="ebook" className="w-full bg-[#060511] py-12 md:py-24 px-4 flex justify-center border-b-2 border-[#DAFF00]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-12 md:gap-0">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center md:items-start items-center md:pr-16 max-w-xl">
          <span className="bg-[#232323] text-white text-lg px-2 py-1 rounded mb-4 font-light">eBook</span>
          <h2 className="text-[#DAFF00] text-2xl md:text-4xl font-bold mb-4 leading-tight text-left md:text-left text-center">
            Navegue sem medo:<br className="hidden md:block" /> seu escudo contra ameaças digitais
          </h2>
          <p className="text-white text-sm md:text-base font-extralight mb-4 text-left md:text-left text-center">
            Aprenda, de forma simples e objetiva, como proteger seus dados, evitar golpes e navegar com mais segurança.
          </p>
          <ul className="mb-6 text-white text-sm md:text-base text-left md:text-left text-center">
            <li className="flex items-center mb-1"><span className="text-[#DAFF00] mr-2">✅</span>Dicas práticas</li>
            <li className="flex items-center mb-1"><span className="text-[#DAFF00] mr-2">✅</span>Explicações claras</li>
            <li className="flex items-center"><span className="text-[#DAFF00] mr-2">✅</span>Glossário essencial</li>
          </ul>
          <a
            href="https://pay.hotmart.com/S100769227I"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DAFF00] text-black font-bold px-6 py-3 rounded transition hover:scale-105 duration-200 shadow-md flex items-center mt-2"
          >
            BAIXE AGORA <span className="ml-2">&rarr;</span>
          </a>
        </div>
        {/* Imagem do livro */}
        <div className="flex-1 flex justify-center md:justify-end items-center ">
          <img
            src={bookCover}
            alt="Capa do eBook Navegue sem medo"
            className="w-full h-auto rounded-lg shadow-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BookSection; 