import React from "react";
import Typed from "react-typed";
import { useGlitch } from "react-powerglitch";
import gif from "../assets/logoGif.gif";

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
      <div className="min-h-screen relative max-w-[100%] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <div className="flex justify-center items-center z-10">
          <p className="md:text-5xl text-1xl  font-bold py-4  whitespace-nowrap">
            Sua solução em
          </p>
          <Typed
            className="md:text-5xl text-lima  text-1xl font-bold md:pl-4 pl-2 whitespace-nowrap"
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
        <div className=" absolute z-0 top-[30%] md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={gif}
            alt="logo animated gif"
            className="h-[180px] w-[180px] sm:h-[440px] sm:w-[440px] md:h-[440px] md:w-[440px]"
          ></img>
        </div>
        <button
          ref={glitch.ref}
          className="bg-[#DAFF00] w-[100px] rounded-lg font-medium my-6 mx-auto py-3 text-black"
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Hero;
