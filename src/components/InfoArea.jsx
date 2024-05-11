import bg from "../assets/bg.png";
import { useMediaQuery } from "react-responsive";
import { VerticalTimeline } from "./VerticalTimeline";
import { DataDisplay } from "./DataDisplay";
export const InfoArea = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div
      className="bg-cover bg-center bg-no-repeat  md:h-[200.5rem] h-[255.5rem]  border-t-2 border-[#DAFF00] "
      id="wing"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col justify-center mt-[6.6rem] items-center">
        <div>
          <h1
            className="text-[#DAFF00] font-extrabold md:text-3xl text-2xl md:mr-4 mr-2 
            transform md:translate-y-[-2rem] pl-4 md:pl-0  translate-y-[-1.2rem]"
          >
            WING
          </h1>
        </div>
        <div
          className="text-center flex flex-col md:text-lg text-sm font-extralight text-white md:max-w-[55.75rem] mx-[3.5rem] md:mx-0"
          id="quemsomos"
        >
          <p>
            O Wing é um software de propriedade da Estuário TI para{" "}
            <strong className="font-bold">
              {" "}
              gestão de projetos em segurança da informação.
            </strong>{" "}
            Durante a realização de um projeto de segurança da informação
            conosco, todos as falhas (vulnerabilidades) são documentadas nele e
            o cliente terá acesso em tempo real ao que está sendo realizado. O
            Wing possui um dashboard inteligente, sendo possível ter uma visão
            ampla e detalhada dos resultados, atribuir quem deve fazer as
            correções e acompanhar os status das tarefas. Um sistema controlado,
            acessível a qualquer hora e de qualquer lugar. Além disso, com tudo
            documentado, o Wing se torna uma enorme base de conhecimento sobre a
            infraestrutura e projetos web, que podem ser facilmente
            compartilhados com futuros colaboradores da empresa.
          </p>
        </div>
      </div>
      <div
        className="flex justify-center items-center md:mt-[6rem] mt-[4rem]"
        id="quemsomos"
      >
        <div className="flex flex-col text-center md:max-w-[55.75rem]">
          <div>
            <h1 className="text-[#DAFF00] font-bold text-2xl md:text-3xl ">
              QUEM SOMOS
            </h1>
          </div>
          <div>
            <p className="font-semibold text-white md:text-3xl px-6 text-sm p-2 mt-6 md:px-8">
              A Estuário TI é uma empresa pernambucana que atua na área de
              Segurança da Informação.
            </p>
            <p className="font-extralight mt-10 text-white md:text-lg text-sm p-2">
              O nosso trabalho é fornecer tecnologia para a proteção contínua de
              dados dos nossos clientes. Contamos com uma grande experiência em
              projetos corporativos, nas esferas pública e privada, provendo a
              segurança de empresas das áreas de saúde, educação, direito e
              construção civil. A Estuário TI posiciona-se no mercado como um
              serviço personalizado e de custo-benefício sob medida.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center transform md:mt-[6rem] mt-[4rem] text-right">
            <div className=" flex items-center justify-center">
              <h1 className="text-[#DAFF00] font-bold md:text-3xl text-2xl text-right mb-8">
                NOSSA HISTÓRIA
              </h1>
            </div>
            <div className="md:w-1/2 md:text-left text-center md:pr-6 md:pl-4 px-6">
              <div className="md:text-right text-center">
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
            {!isMobile ? <div className="w-1/2 text-right"></div> : null}
          </div>
          <div className="mt-[6rem]">
            {" "}
            <VerticalTimeline />
          </div>
        </div>
      </div>
      <div className=" mt-[4rem]">
        <DataDisplay />
      </div>
    </div>
  );
};
