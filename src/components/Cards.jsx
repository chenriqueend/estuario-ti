import { React } from "react";
import Swiper from "./Swiper";
import tuba from "../assets/ISCONETUBApng.png";
import lupa from "../assets/lupa.png";
import lock from "../assets/cadeado.png";
// import { sendMail } from "../services/mailto";

const Cards = () => {
  const openPDF = () => {
    // Abre o arquivo PDF em uma nova aba
    const path = require(`../assets/infoEstuario.pdf`);
    window.open(path, "_blank");
  };

  return (
    <div className="w-full pb-48 px-4 bg-[#253D47]">
      <div className="py-10">
        <p className="text-center font-sans text-3xl font-light text-white pb-12">
          No Brasil, os incidentes de segurança aumentaram significativamente
          nos últimos três anos.
          <br /> Seu negócio possui um nível de segurança para evitar invasões e
          que os seus dados não sejam expostos?
        </p>
        <p className="text-center font-sans text-1xl text-lima font-bold">
          {"As metodologias de testes de intrusão da Estuário TI fornecem uma abordagem consistente para garantir resultados completos e detalhados".toUpperCase()}
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#112329]">
          <div className="grid justify-items-start">
            <h2 className="text-xs font-bold text-center py-2 text-white">
              SERVIÇOS
            </h2>
            <p className="text-center text-1xl font-bold text-lima">
              Análise de aplicações
            </p>
          </div>
          <div className="text-center self-center  font-medium">
            <img
              src={tuba}
              alt="logo animated gif "
              className="h-[15rem] w-[15rem] mt-1"
            ></img>
          </div>
          <button
            className="bg-lima w-[200px] rounded-md font-medium my-6 
          mx-auto px-6 py-3"
            onClick={() => {
              openPDF("../assets/infoEstuario.pdf");
            }}
          >
            Saiba mais
          </button>
        </div>
        <div
          className="w-full shadow-xl bg-[#112329] flex flex-col p-4
          md:my-0 my-8 rounded-lg hover:scale-105 duration-300"
        >
          <div className="grid justify-items-start">
            <h2 className="text-xs font-bold text-center py-2 text-white">
              SERVIÇOS
            </h2>
            <p className="text-center text-1xl font-bold text-[#DAFF00]">
              Gestão de Vulnerabilidade
            </p>
          </div>
          <div className="text-center self-center  font-medium">
            <img
              src={lupa}
              alt="logo animated gif "
              className="h-[15rem] w-[10rem] mt-5"
            ></img>
          </div>
          <button
            className="bg-[#253D47] text-[#DAFF00] w-[200px]
            rounded-md font-medium my-6 mx-auto px-6 py-3
            "
            onClick={() => {
              openPDF("../assets/infoEstuario.pdf");
            }}
          >
            Saiba mais
          </button>
        </div>
        <div
          className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg
          hover:scale-105 duration-300 bg-[#112329]"
        >
          <div className="grid justify-items-start">
            <h2 className="text-xs font-bold text-center py-2 text-white">
              SERVIÇOS
            </h2>
            <p className="text-center text-1xl font-bold text-[#DAFF00]">
              Teste de Intrusão
            </p>
          </div>
          <div className="text-center justify-center self-center text-xs ">
            <img
              src={lock}
              alt="logo animated gif "
              className="h-[15rem] w-[10rem] mt-5"
            ></img>
          </div>
          <button
            className="bg-[#DAFF00] w-[200px] rounded-md 
          font-medium my-6 mx-auto px-6 py-3"
            onClick={() => {
              openPDF("../assets/infoEstuario.pdf");
            }}
          >
            Saiba mais
          </button>
        </div>
      </div>
      <p className="text-center font-sans text-2xl text-lima mt-12 font-bold">
        Clientes
      </p>
      <div className="flex justify-center items-center mt-8">
        <div className="w-3/4 border-[0.5px] border-white rounded-lg p-6 ">
          <Swiper />
        </div>
      </div>
      <div className="flex justify-center mt-12 ">
        <div className="flex-column">
          <form action="">
            <label
              htmlFor="message"
              className="block mb-2 text-1xl font-medium text-[#DAFF00] "
            >
              Entre em contato
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-[20rem] lg:w-[66rem] md:w-[38rem] text-sm 
               rounded-lg border border-gray-600 
               valid:border-lima bg-[#112329] 
              placeholder-gray-400 text-white
              autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
               autofill:duration-[5000000ms]
              autofill:!text-white
               "
              placeholder="Escreva o texto para o email."
              required
            ></textarea>
            <div className="flex pt-4 gap-3">
              <input
                type="email"
                id="email"
                className={` border   text-sm
                rounded-lg block w-[60%] md:w-[30%]
                p-2.5 border-gray-600 placeholder-gray-400  
                text-white valid:border-lima bg-[#112329]
                focus:bg-[#112329]
                 autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
                  autofill:duration-[5000000ms]
                 autofill:!text-white
                `}
                placeholder="Seu email."
                required
              ></input>
              <button
                className="bg-[#DAFF00] w-[120px] rounded-md font-medium 
              py-2 hover:scale-105 duration-300"
                onClick={() => {
                  // sendMail();
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cards;
