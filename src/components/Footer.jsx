import { React } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import logo from "../assets/logoLima.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#112329]">
      <div className="flex itemmax-w-[100%] mx-auto py-16 md:px-36 gap-8 text-gray-300 ">
        <div className="flex-column">
          <div className="flex whitespace-nowrap space-x-3">
            <img
              src={logo}
              alt="Estuário TI Logo "
              className="fill-lima mt-1"
            ></img>
            <h1 className="w-full text-3xl font-bold text-lima">Estuário TI</h1>
          </div>
          <div
            className="flex whitespace-nowrap mx-4 mt-3 gap-3 text-white text-center font-inter text-base font-light 
          uppercase tracking-wider md:w-[207px]"
          >
            <a
              href="https://www.google.com/maps/place/Estu%C3%A1rioTI/
              @-8.0379788,-34.9193399,15z/data=!4m2!3m1!1s0x0:0xfa68e6c334ff3007?
              sa=X&ved=2ahUKEwiS49nwqfSCAxXKgpUCHVnNBewQ_BJ6BAhAEAA"
              className="hover:text-lima"
              target="_blank"
              rel="noreferrer"
            >
              recife{" "}
            </a>
            <h2>|</h2>
            <a
              href="https://www.google.com/maps/place/Estu%C3%A1rioTI/
              @-8.0379788,-34.9193399,15z/data=!4m2!3m1!1s0x0:0xfa68e6c334ff3007?
              sa=X&ved=2ahUKEwiS49nwqfSCAxXKgpUCHVnNBewQ_BJ6BAhAEAA"
              className="hover:text-lima"
              target="_blank"
              rel="noreferrer"
            >
              são paulo
            </a>
          </div>
          <div className="flex space-x-5 md:w-[75%] my-10 mx-8">
            <a
              href="https://facebook.com/Estuarioti"
              title="Facebook "
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={30} className="hover:fill-lima" />
            </a>
            <a
              href="https://www.instagram.com/estuario.ti/"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} className="hover:fill-lima" />
            </a>
            <a
              href="https://twitter.com/estuarioti"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare size={30} className="hover:fill-lima" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
