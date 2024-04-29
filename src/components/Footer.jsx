import { React } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarked,
  FaTwitterSquare,
} from "react-icons/fa";

import logo from "../assets/logoLima.svg";
import Swiper from "./Swiper";
import FormContact from "./FormContact";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#060511]" id="contato">
      <div className="mx-auto py-16 md:px-36 gap-8 text-gray-300 ">
        <div className="md:max-w-[900px] max-w-[300px]">
          <Swiper />
        </div>
        <div className="md:max-w-[900px] max-w-[300px] mb-[12rem]">
          <FormContact />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex whitespace-nowrap space-x-3">
              <img
                src={logo}
                alt="Estuário TI Logo "
                className="fill-lima mt-1"
              ></img>
              <h1 className="w-full text-3xl font-bold text-lima">
                Estuário TI
              </h1>
            </div>
          </div>
          <div
            className="flex whitespace-nowrap mt-3 gap-2 text-white text-center align-middle font-inter text-base font-light 
          uppercase tracking-wider md:w-[207px]"
          >
            <a
              href="https://www.google.com/maps/place/Estu%C3%A1rioTI/
              @-8.0379788,-34.9193399,15z/data=!4m2!3m1!1s0x0:0xfa68e6c334ff3007?
              sa=X&ved=2ahUKEwiS49nwqfSCAxXKgpUCHVnNBewQ_BJ6BAhAEAA"
              title="Location"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarked size={30} className="hover:fill-lima" />
            </a>
            <a
              href="https://www.google.com/maps/place/Estu%C3%A1rioTI/
              @-8.0379788,-34.9193399,15z/data=!4m2!3m1!1s0x0:0xfa68e6c334ff3007?
              sa=X&ved=2ahUKEwiS49nwqfSCAxXKgpUCHVnNBewQ_BJ6BAhAEAA"
              className="hover:text-lima"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" mt-[0.3rem]"> recife </div>
            </a>
            <h2 className="mt-[0.3rem]">|</h2>
            <a
              href="https://www.google.com/maps/place/Estu%C3%A1rioTI/
              @-8.0379788,-34.9193399,15z/data=!4m2!3m1!1s0x0:0xfa68e6c334ff3007?
              sa=X&ved=2ahUKEwiS49nwqfSCAxXKgpUCHVnNBewQ_BJ6BAhAEAA"
              className="hover:text-lima"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" mt-[0.3rem]"> são paulo </div>
            </a>
          </div>
          <div className="flex space-x-5  my-6 mx-8">
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
