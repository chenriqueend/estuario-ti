import bg from "../assets/bg.png";
import { VerticalTimeline } from "./VerticalTimeline";
export const InfoArea = () => {
  const timelineData = [
    {
      year: "2012",
      title:
        "Foi o ano de maior mudança para a Estuário, nosso corpo de funcionários já estava bastante robusto e o escritório do Poço estava pequeno. Fomos para um lugar incrível que construímos tudo do nosso jeito, no bairro da Madalena.",
      description:
        "Também em 2014 foi o ano em que abrimos o nosso escritório em São Paulo, sair de Recife não se significava apenas desenvolvimento corporativo, mas também, quebrar paradigmas e preconceitos, mostrando nossa qualidade nos serviços que entregávamos na maior cidade do Brasil. ",
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
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[82.5rem] md:h-[180.5rem] border-t-2 border-[#DAFF00]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center mt-[6.6rem]">
        <div>
          <h1
            className="text-[#DAFF00]  font-extrabold text-6xl mr-4  
            transform translate-y-[-2rem]"
          >
            WING
          </h1>
        </div>
        <div className="text-left flex flex-colmt-2 md:text-lg text-sm font-extralight text-white md:max-w-[55.75rem]   ">
          <p>
            O Wing é um software para{" "}
            <strong className="font-bold">
              gestão de projetos em segurança da informação.
            </strong>{" "}
            Durante a realização den um projeto de segurança da
            informação, todos as falhas (vulnerabilidades) são documentadas
            nele. O Wing possui um dashboard inteligente, sendo possível ter uma
            visão ampla e detalhada dos resultados, atribuir quem deve fazer as
            correções e acompanhar os status das tarefas. Um sistema controlado,
            acessível a qualquer hora e de qualquer lugar. Além disso, com tudo
            documentado, o Wing se torna uma enorme base de conhecimento sobre a
            infraestrutura e projetos web, que podem ser facilmente
            compartilhados com futuros colaboradores da empresa.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10rem] ">
        <div className="flex flex-col text-center md:max-w-[55.75rem]">
          <div>
            <h1 className="text-[#DAFF00] font-bold text-lg ">QUEM SOMOS</h1>
          </div>
          <div>
            <p className="font-semibold text-white text-[2.5rem]">
              A Estuário TI é uma empresa pernambucana, que atua na área de
              Segurança da Informação.
            </p>
            <p className="font-extralight mt-10 text-white text-lg">
              O nosso trabalho é fornecer tecnologia para a proteção contínua de
              dados dos nossos clientes. Contamos com uma grande experiência em
              projetos corporativos, nas esferas pública e privada, provendo a
              segurança de empresas das áreas de saúde, educação, direito e
              construção civil. A Estuário TI posiciona-se no mercado como um
              serviço personalizado e de custo-benefício sob medida.{" "}
            </p>
          </div>
          <div className="flex justify-center transform mt-[10rem] text-right">
            <div className="w-1/2 text-left pr-6 ">
              <div>
                <h1 className="text-[#DAFF00] font-bold text-lg text-right mb-2">
                  NOSSA HISTÓRIA
                </h1>
              </div>
              <div className="text-right">
                <p className="md:text-lg text-sm font-extralight text-white">
                  Fundada em 2012 no ambiente do{" "}
                  <strong className="font-bold">Porto Digital</strong>, com a
                  intenção de suprir as necessidades do mercado de segurança da
                  informação, a Estuário TI faz parte do cenário da{" "}
                  <strong className="font-bold">
                    Cultura Digital pernambucana
                  </strong>
                  , que é reconhecido como o{" "}
                  <strong className="font-bold">
                    maior parque tecnológico do Brasil
                  </strong>{" "}
                  em faturamento e número de empresas. Nossa empresa fica
                  localizada no bairro do poço da panela em{" "}
                  <strong className="font-bold">
                    Recife, e com filial em São Paulo.
                  </strong>
                </p>
              </div>
            </div>
            <div className="w-1/2 text-right"></div>
          </div>
          <div className="mt-[12rem]">
            {" "}
            <VerticalTimeline data={timelineData} />
          </div>
        </div>
      </div>
    </div>
  );
};
