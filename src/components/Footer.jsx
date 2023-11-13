import { React } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div
      className="max-w-[100%] mx-auto py-16  px-12 md:px-36 grid 
    lg:grid-cols-3 gap-8 text-gray-300 bg-[#112329]"
    >
      <div className="flex-column items-start">
        <div className="flex items-center whitespace-nowrap space-x-3">
          <img src={logo} alt="Estuário TI Logo"></img>
          <h1 className="w-full text-3xl font-bold text-lima">Estuário TI</h1>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://www.google.com/maps/place/Estu%C3%A1rioTI/@-8.0392642," +
            "-34.920563,17z/data=!4m6!3m5!1s0x7ab18dfef65c4ef:0xfa68e6c334ff3007!" +
            "8m2!3d-8.0379788!4d-34.9193399!16s%2Fg%2F11ckvfcytf?entry=ttu"
          }
        >
          <div
            className="flex justify-center mt-4 bg-[#253D47] rounded-lg md:w-[50%]
          p-4 hover:cursor-pointer hover:text-lima hover:scale-105 duration-300 "
          >
            <address
              data-query="Rua Demócrito de Souza Filho, 335"
              data-i18n="[html]address.recife"
            >
              <h2>Pernambuco</h2>Rua do Chacon, 51 <br></br> Poço da Panela -
              Recife/PE <br></br> CEP 52061-400 <br></br> Fone +55 81 3236-0961
            </address>
          </div>
        </a>
        <div className="flex space-x-5 md:w-[75%] my-6">
          <a href="https://facebook.com/Estuarioti" title="Facebook">
            <FaFacebookSquare size={30} className="hover:fill-lima" />
          </a>
          <a href="https://www.instagram.com/estuario.ti/" title="Instagram">
            <FaInstagram size={30} className="hover:fill-lima" />
          </a>
          <a href="https://twitter.com/estuarioti" title="Twitter">
            <FaTwitterSquare size={30} className="hover:fill-lima" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
