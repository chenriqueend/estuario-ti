import React, { useState } from "react";

export const VerticalTimeline = () => {
  const [visibleItems, setVisibleItems] = useState({});

  const timelineEvents = [
    {
      year: "2012",
      title:
        "Nasce no ano de 2012 a Estuário TI, nome que remete a um lugar seguro para desenvolvimento da vida existente nos mares e rios, uma empresa com DNA pernambucano voltada especificamente para segurança cibernética. ",
      description:
        "Diferente da maioria não nascemos de uma startup, mas sim do desejo de desenvolvimento de uma empresa com objetivos e missão definidas, e na contramão de não estar localizada no bairro do Recife, nosso primeiro escritório ficava no Derby.",
    },
    {
      year: "2013",
      title: "",
      description:
        "A Estuário é convidada para fazer parte da comunidade Conecta. Lá, neste primeiro ano já houve a mudança do escritório do Derby para o Poço da Panela, assim como os primeiros clientes em São Paulo.",
    },
    {
      year: "2014",
      title:
        "Foi o ano de maior mudança para a Estuário, nosso corpo de funcionários já estava bastante robusto e o escritório do Poço estava pequeno. Fomos para um lugar incrível que construímos tudo do nosso jeito, no bairro da Madalena.",
      description:
        "Também em 2014 foi o ano em que abrimos o nosso escritório em São Paulo, sair de Recife não se significava apenas desenvolvimento corporativo, mas também, quebrar paradigmas e preconceitos, mostrando nossa qualidade nos serviços que entregávamos na maior cidade do Brasil.     ",
    },
    {
      year: "2015",
      title:
        "Logo no início de 2015, desenvolvemos o produto El Pescador e deu início às atividades na área de treinamento, conscientização em segurança e testes de phishing. ",
      description:
        "Neste mesmo ano fizemos a transformação de produto para empresa e assim em setembro daquele ano concluímos a venda para a Tempest, que o adquiriu para desenvolvimento do seu portfólio. ",
    },
    {
      year: "2016",
      title: "",
      description:
        "Após a venda do El Pescador, a Estuário TI se consolidou no mercado de segurança da informação como uma empresa de serviços de alta qualidade e customizados para cada tipo de cliente. ",
    },
    {
      year: "2020",
      title: "",
      description:
        "Apesar do ano ser de pandemia tivemos um crescimento enorme, pois cresceu demais a demanda de crimes cibernéticos, o que consolidou ainda mais a Estuário TI.",
    },
    {
      year: "2022",
      title:
        "Ao longo dos seus 12 anos, a Estuário já ajudou a proteger muitas empresas de todos os portes e setores, entre elas grandes companhias do setor financeiro, varejo, e-commerce, indústrias e energia, atuando em clientes nacionais e internacionais, sempre atendidos tanto pelo time no Brasil. ",
      description:
        "Em sua trajetória, a Estuário TI consolidou seus negócios aliando expertise técnica, sólida metodologia e alta tecnologia para entregar serviços de alta qualidade e customizados para cada necessidade de seus clientes.",
    },
    // Adicione mais objetos conforme necessário
  ];

  const toggleItem = (index) => {
    setVisibleItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="timeline-container" className="p-15 overflow-auto">
      <div className="inner-container max-w-4xl mx-auto">
        <ul className="timeline relative md:pl-[12rem] pl-8 w-4/5 max-w-2xl mb-4 ml-auto">
          {timelineEvents.map((event, index) => (
            <li
              className="timeline-item text-white text-center text-xl py-4 px-6 border-l-4 border-[#DAFF00] relative list-none"
              data-date={event.year}
              key={index}
            >
              <div
                className="timeline-marker absolute left-[-2px] top-5 -translate-x-1/2 w-4 h-4 bg-white hover:bg-[#DAFF00] rounded-full cursor-pointer"
                onClick={() => toggleItem(index)}
              />
              <span className="absolute -left-20 top-3 font-bold text-white">
                {event.year}
              </span>
              <div
                className={`${
                  visibleItems[index] ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out text-left md:text-base text-sm font-extralight`}
              >
                {event.title && <h2>{event.title}</h2>}
                {event.description && <p>{event.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
