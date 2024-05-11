import React, { useState } from "react";
import Typed from "react-typed";
import { useGlitch } from "react-powerglitch";
import mainLogo from "../assets/mainLogo.svg";
import bg from "../assets/bg.png";
import Modal from "./modal";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import ArrowBottomNavigator from "./ArrowBottomNavigator";

const Hero = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleOpenModal = () => {
    if (isMobile) {
      window.location.href = "https://www.youtube.com/watch?v=q-AGKT3YRYM";
    } else {
      setOpenVideo(true);
    }
  };

  /**
   * Hook responsavel por controlar a animacao de glitch do botao
   *  */
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
    <div
      className="bg-cover bg-center bg-no-repeat h-[86.5rem] md:h-[86.5rem] "
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <div
        className=" absolute  left-1/2 transform 
      -translate-x-1/2 translate-y-[12rem] "
      >
        <img
          src={mainLogo}
          alt="main logo estuario ti"
          className="w-[280px] h-[280px] md:mt-12"
        ></img>
      </div>
      <div
        className="min-h-[62rem] md:min-h-[62rem] relative mx-auto
       text-center flex flex-col justify-center transform translate-y-[18rem]"
      >
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl text-1xl font-inter  font-normalpy-4  whitespace-nowrap text-white">
            Sua solução em
          </p>
          <Typed
            className="md:text-4xl text-lima text-1xl font-inter font-normal md:pl-3 pl-2 
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
          onClick={handleOpenModal}
        >
          Saiba mais
        </button>

        <div className="flex justify-center transform md:translate-y-[26rem] translate-y-[20rem]">
          <div className="w-1/2 text-right"></div>
          <div className="w-1/2 text-left pr-6 ">
            <div className="">
              <p className="md:text-lg text-sm font-extralight text-gray-400">
                No Brasil, os incidentes relacionados a segurança de
                <br /> dados aumentaram significativamente nos últimos três
                anos. <br />
                Qual o nível de segurança seu negócio possui para evitar
                <br />
                invasões e que os seus dados não sejam expostos?
              </p>
              <p className="mt-2 md:text-lg text-sm font-bold text-white">
                As metodologias de testes de intrusão da Estuário TI <br />{" "}
                fornecem uma abordagem consistente para garantir <br />{" "}
                resultados completos e detalhados.
              </p>
            </div>
          </div>
        </div>
        <ArrowBottomNavigator />
      </div>
      {isMobile ? null : (
        <Modal
          isOpen={openVideo}
          onClose={() => {
            setOpenVideo(false);
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/q-AGKT3YRYM?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default Hero;
