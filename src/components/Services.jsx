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
        <h1 className="flex md:text-3xl text-2xl text-center font-bold text-[#DAFF00] md:pb-[2rem] pb-4 md:justify-center ">
          NOSSOS SERVIÇOS
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full md:max-w-[1240px] flex-col md:flex-row items-center">
          <div className="w-1/2 md:pr-4">
            <Dropdown title="Gestão de Vulnerabilidade">
              <p>
                Mantenha toda sua infraestrutura de rede continuamente
                protegida. Diferente do Teste de Instrusão que é pontual, aqui o
                nosso time de especialistas age diariamente de forma proativa
                como um invasor interno ou externo interessado em encontrar
                vulnerabilidades tanto em aplicações web, bem como em
                infraestrutura.
              </p>
            </Dropdown>
            <Dropdown title="ASA - Administração segura assistida">
              <p>
                Administre a proteção da sua infraestrutura de rede com o nosso
                time. Com a Administração Segura Assistida a infraestrutura de
                servidores da sua empresa passa a ser administrada pelo nosso
                time de experts em segurança da informação. Voltado
                especialmente para companhias que não possuem equipes de
                administração de sistemas, o serviço conta com SLA ágil e
                customizável de acordo com a necessidade da sua empresa.
              </p>
            </Dropdown>
            <Dropdown title="threat intelligence">
              <p>
                O Threat Intelligence, ou inteligência de ameaças, visa proteger
                sua empresa contra ameaças reais. Dessa maneira, são feitas
                análises constantes na web, buscando evidências que caracterizem
                ameaças de redes, networking, pessoas e aplicações web, evitando
                os riscos do seu negócio. Tal recurso, permite o gestor conhecer
                os possíveis riscos e previni-los de modo eficaz, além de estar
                sempre monitorando as informações da empresa na web.
              </p>
            </Dropdown>
            <Dropdown title="análise em aplicações web">
              <p>
                Identifique e elimine ameaças tanto no desenvolvimento de suas
                aplicações quanto em projetos já desenvolvidos.  Busca e
                identifica vulnerabilidades capazes de impactar nas aplicações,
                bem como no modelo de negócio da empresa. A análise ajuda a
                reduzir custos no ciclo de desenvolvimento e minimizar os riscos
                relacionados à segurança da informação.
              </p>
            </Dropdown>
          </div>
          <div className="w-1/2 md:pr-4">
            <Dropdown title="análise forense digital">
              <p>
                Análise forense digital, é o processo de coletar, preservar,
                analisar e apresentar evidências digitais que podem ser usadas
                em investigações legais. Esse campo da ciência forense lida com
                a recuperação e investigação de informações encontradas em
                dispositivos eletrônicos, como computadores, smartphones,
                tablets, servidores, entre outros. A análise forense digital
                envolve habilidades técnicas, conhecimento em leis e
                regulamentações relacionadas à privacidade e segurança da
                informação, bem como o uso de ferramentas especializadas para a
                investigação de incidentes cibernéticos e crimes digitais.
              </p>
            </Dropdown>
            {/* <Dropdown title="engenharia social">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown> */}
            <Dropdown title="phishing educativo">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown>
            <Dropdown title="TESTE DE INTRUSÃO - PENETRATION TESTING">
              <p>
                Fique ao menos um passo à frente do invasor. Focado na
                infraestrutura de networking, o teste age como um invasor
                interno ou externo interessado em encontrar e explorar as
                vulnerabilidades. Mas não qualquer atacante, os nossos
                especialistas procuram falhas manualmente, num processo
                meticuloso de busca, garantindo resultados mais eficientes e
                precisos, que só um humano com expertise é capaz de alcançar.
              </p>
            </Dropdown>
            {/* <Dropdown title="teste de ransomware">
              <p>
                Por meio de simulações customizadas, a Estuário TI envia e-mails
                maliciosos para testar a sua equipe. Pesquisamos a sua empresa e
                utilizamos técnicas avançadas de engenharia social. Criamos
                simulações que se aproximam ao máximo dos ataques reais, levando
                em consideração aspectos únicos da cultura da companhia e dos
                seus colaboradores, bem como dados expostos na internet.
              </p>
            </Dropdown> */}
            <Dropdown title="treinamento em segurança da informação">
              <p>
                Realizamos treinamentos de Análise de aplicações Web e Testes de
                Intrusão in company ou em nossas dependências. O treinamento de
                análise de aplicações web é voltado para o publico que
                desenvolve aplicações web. Já o de teste de intrusão é focado em
                quem administra a rede da empresa (administradores de sistemas).
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
          maxHeight: isOpen ? "200px" : "0",
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
