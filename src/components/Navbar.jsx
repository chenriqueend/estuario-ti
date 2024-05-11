import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 flex justify-between items-center md:h-20 max-w-full mx-auto md:px-28 px-6 h-16 text-white transition-colors duration-300 ${
    scrolled ? "bg-[#060511]" : "bg-transparent"
  }`;

  return (
    <div className={navbarClasses}>
      <img
        src={logo}
        alt="Estuário TI Logo"
        className="inline-block w-7 h-7 mr-2 cursor-pointer "
        onClick={() => scrollToSection("home")}
      />
      <h1
        className="w-full text-2xl font-bold text-[#DAFF00] cursor-pointer "
        onClick={() => scrollToSection("home")}
      >
        Estuário TI
      </h1>
      <ul className="hidden md:flex">
        <li
          className="p-3 font-bold cursor-pointer hover:text-lima"
          onClick={() => scrollToSection("home")}
        >
          HOME
        </li>
        <li
          className="p-3 cursor-pointer hover:text-lima"
          onClick={() => scrollToSection("servicos")}
        >
          SERVIÇOS
        </li>
        <li
          className="p-3 cursor-pointer hover:text-lima"
          onClick={() => scrollToSection("wing")}
        >
          WING
        </li>
        <li
          className="p-3 whitespace-nowrap cursor-pointer hover:text-lima"
          onClick={() => scrollToSection("quemsomos")}
        >
          QUEM SOMOS
        </li>
        <li
          className="p-2 whitespace-nowrap border-2 self-center cursor-pointer hover:border-lima hover:text-lima"
          onClick={() => scrollToSection("contato")}
        >
          ENTRAR EM CONTATO
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
