import { React, useState } from "react";
import { useMediaQuery } from "react-responsive";
import plusIcon from "../assets/plusIcon.svg";
import closeIcon from "../assets/closeIcon.svg";

const Services = () => {
  return (
    <div
      className="w-full bg-[#060511] min-h-[36rem] md:py-[6rem] py-[4rem]"
      id="servicos"
    >
      <div className="flex flex-initial justify-center">
        {/* "md:pl-[21.8rem] text-center md:text-left md:px-4 px-2"> */}
        <h1 className="flex text-2xl font-bold text-[#DAFF00] md:pb-[2rem] pb-4 md:justify-center ">
          NOSSOS SERVIÇOS
        </h1>
        <div className="flex-none md:w-[1000px]"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full md:max-w-[1240px] flex-col md:flex-row items-center">
          <div className="w-1/2 md:pr-4">
            <Dropdown title="Gestão de Vulnerabilidade">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="ASA - Administração segura assistida">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="threat intelligence">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="análise em aplicações web">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="análise forence digital">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
          </div>
          <div className="w-1/2 md:pr-4">
            <Dropdown title="engenharia social">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="teste phishing">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="pentest -  teste de instrusão">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="teste de ransomware">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="treinamento em segurança da informação">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="md:px-4 px-0">
      <div
        className="flex md:pt-8 pt-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="text-white font-bold md:pb-2 w-full text-left text-xs md:text-base whitespace-nowrap">
          {isMobile && title.length > 23
            ? title.toUpperCase().substring(0, 23) + "..."
            : title.toUpperCase()}
        </button>
        <img
          src={isOpen ? closeIcon : plusIcon}
          alt="toggle icon"
          className="w-6 h-6"
        />
      </div>
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="text-white mt-2 text-xs md:text-base font-extralight">
          {children}
        </div>
      </div>
      <div className="md:w-full w-[195px] mt-3 border-b-2 border-[#DAFF00]"></div>
    </div>
  );
};

export default Services;
