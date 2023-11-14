import React from "react";
import Typed from "react-typed";
import { useGlitch } from "react-powerglitch";
import mainLogo from "../assets/mainLogo.svg";
import logo from "../assets/logo.svg";

const Hero = () => {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 3950,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <div className="text-white bg-[#112329]">
      <div className="flex justify-center gap-3 pt-4">
        <img
          src={logo}
          alt="Estuário TI Logo"
          className="inline-block w-6 h-6 mt-[0.45rem]"
        />
        <h1
          className="text-lima pb-0.5 font-sans text-3xl font-semibold 
        whitespace-nowrap"
        >
          Estuário TI
        </h1>
      </div>
      <div
        className=" absolute top-[30%] md:top-1/4 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src={mainLogo}
          alt="logo animated gif "
          className="w-[280px] h-[280px] md:mt-36"
        ></img>
      </div>
      <div
        className="min-h-screen relative max-w-[100%] w-full h-screen mx-auto
       text-center flex flex-col justify-center md:pt-36"
      >
        <div className="flex justify-center items-center">
          <p className="md:text-5xl text-1xl  font-bold py-4  whitespace-nowrap">
            Sua solução em
          </p>
          <Typed
            className="md:text-5xl text-lima  text-1xl font-bold md:pl-4 pl-2 
            whitespace-nowrap"
            strings={[
              "segurança cibernética.",
              "proteção de dados.",
              "segurança empresarial.",
              "integridade de sistemas.",
              "prevenção de ameaças.",
            ]}
            typeSpeed={110}
            backSpeed={110}
            loop
          />
        </div>

        <button
          ref={glitch.ref}
          className="bg-[#DAFF00] w-[120px] rounded-lg font-medium my-6 
          mx-auto py-3 text-black hover:scale-105 duration-300"
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Hero;