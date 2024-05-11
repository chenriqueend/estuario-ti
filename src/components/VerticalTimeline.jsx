import React from "react";

export const VerticalTimeline = () => {
  const timelineEvents = [
    {
      year: "2012",
      title:
        "Nasce no ano de 2012 a Estuário TI, nome que remete a um lugar seguro para o desenvolvimento da vida existente nos mares e rios, uma empresa com DNA pernambucano voltada especificamente para segurança cibernética. Diferente da maioria não nascemos de uma startup, mas sim do desejo de desenvolvimento de uma empresa com objetivos e missão definidas.",

      description:
        "A Estuário é convidada para fazer parte da comunidade Conecta Lá. Neste primeiro ano já houve a mudança do escritório do Derby para o Poço da Panela, assim como os primeiros clientes em São Paulo.",
    },
    {
      year: "2013",
      title: "",
      description:
        "A Estuário é convidada para fazer parte da comunidade Conecta Lá, neste primeiro ano já houve a mudança do escritório do Derby para o Poço da Panela, assim como os primeiros clientes em São Paulo.",
    },
    {
      year: "2014",
      title:
        "Foi o ano de maior mudança para a Estuário, além de irmos para um empresarial bem maior no bairro da Madalena, abrimos o nosso primeiro escritório em São Paulo. Sair de Recife não se significava apenas desenvolvimento corporativo, mas também, quebrar paradigmas e preconceitos, mostrando nossa qualidade nos serviços que entregávamos na maior cidade do Brasil. ",
      description:
        "Também em 2014 foi o ano em que abrimos o nosso escritório em São Paulo, sair de Recife não se significava apenas desenvolvimento corporativo, mas também, quebrar paradigmas e preconceitos, mostrando nossa qualidade nos serviços que entregávamos na maior cidade do Brasil.",
    },
    {
      year: "2015",
      title:
        "No início de 2015, desenvolvemos o produto El Pescador e iniciamos às atividades na área de treinamento, conscientização em segurança e testes de phishing. No final daquele mesmo ano recebemos uma proposta da Tempest para adquirir o El Pescador, fizemos a transformação da modelagem do produto e assim concluímos a venda.",
      description:
        "Neste mesmo ano fizemos a transformação de produto para empresa e assim em setembro daquele ano concluímos a venda para a Tempest, que o adquiriu para desenvolvimento do seu portfólio.",
    },
    {
      year: "2016",
      title: "",
      description:
        "Após a venda do El Pescador, a Estuário TI se consolidou no mercado de segurança da informação como uma empresa de serviços de alta qualidade e customizados para cada tipo de cliente.",
    },
    {
      year: "2020",
      title: "",
      description:
        "Com o acontecimento da pandemia do COVID19, houve um grande volume no acontecimento de crimes cibernéticos, onde crescemos mais de 15% em termos de faturamento, o que consolidou ainda mais a Estuário TI, no mercado brasileiro e internacional.",
    },
    {
      year: "2022",
      title:
        "Ao longo dos seus 12 anos, a Estuário ajudou a proteger muitas empresas de todos os portes e setores, entre elas grandes companhias do setor financeiro, varejista, industrial, energético e comercio eletrônico, atuando em clientes nacionais e internacionais, sempre atendidos pelo time no Brasil. Em sua trajetória, a Estuário TI consolidou seus negócios aliando expertise técnica, sólida metodologia e tecnologia avançada para entregar serviços de alta qualidade e customizados para cada necessidade de seus clientes.",
      description:
        "Em sua trajetória, a Estuário TI consolidou seus negócios aliando expertise técnica, sólida metodologia e alta tecnologia para entregar serviços de alta qualidade e customizados para cada necessidade de seus clientes.",
    },
  ];

  return (
    <div id="timeline-container" className="p-15 overflow-auto">
      <div className="inner-container max-w-4xl mx-auto">
        <ul className="timeline relative md:pl-[12rem] pl-8 w-4/5 max-w-2xl mb-4 ml-auto">
          {timelineEvents.map((event, index) => (
            <li
              className="timeline-item text-white text-center text-xl py-4 px-6 border-l-4 border-[#DAFF00] relative list-none"
              key={index}
              data-date={event.year}
            >
              <div className="timeline-marker absolute left-[-2px] top-5 -translate-x-1/2 w-4 h-4 bg-white rounded-full " />
              <span className="absolute -left-20 top-3 font-bold text-white">
                {event.year}
              </span>
              <div className="opacity-100 text-left md:text-base text-sm font-extralight">
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
