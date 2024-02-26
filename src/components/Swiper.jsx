import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { register } from "swiper/element/bundle";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import abril from "../assets/customers/abril.png";
import ale from "../assets/customers/ale.png";
import apexBrasil from "../assets/customers/apexBrasil.png";
import bovespa from "../assets/customers/bovespa.png";
import brq from "../assets/customers/BRQ.png";
import bureau from "../assets/customers/bureau.png";
import cers from "../assets/customers/cers.png";
import cesar from "../assets/customers/cesar.png";
import e from "../assets/customers/e.png";
import emprel from "../assets/customers/emprel.png";
import englishCourse from "../assets/customers/brasas.png";
import foxbit from "../assets/customers/foxbit.png";
import ipiranga from "../assets/customers/image 15.png";
import locaweb from "../assets/customers/locaweb.png";
import modulo from "../assets/customers/modulo.png";
import mouraD from "../assets/customers/mourDubeux.png";
import nassau from "../assets/customers/nassau.png";
import neemu from "../assets/customers/neemu.png";
import neurotech from "../assets/customers/neurotech.png";
import ser from "../assets/customers/ser.png";
import sindpd from "../assets/customers/sindpd.png";
import sitepd from "../assets/customers/sitepd.png";
import stefaninni from "../assets/customers/stefanini.png";
import superTroco from "../assets/customers/superTroco.png";
import tecsinapse from "../assets/customers/tecsinapse.png";
import terra from "../assets/customers/terra.png";
import ustore from "../assets/customers/ustore.png";
import viaparque from "../assets/customers/viaparque.png";
register();

const data = [
  {
    id: "1",
    image: abril,
  },
  {
    id: "2",
    image: ale,
  },
  {
    id: "3",
    image: apexBrasil,
  },
  {
    id: "4",
    image: bovespa,
  },
  {
    id: "5",
    image: brq,
  },
  {
    id: "6",
    image: bureau,
  },
  {
    id: "7",
    image: cers,
  },
  {
    id: "8",
    image: cesar,
  },
  {
    id: "9",
    image: e,
  },
  {
    id: "10",
    image: emprel,
  },
  {
    id: "11",
    image: englishCourse,
  },
  {
    id: "12",
    image: foxbit,
  },
  {
    id: "13",
    image: ipiranga,
  },
  {
    id: "14",
    image: locaweb,
  },
  {
    id: "15",
    image: modulo,
  },
  {
    id: "16",
    image: mouraD,
  },
  {
    id: "17",
    image: nassau,
  },
  {
    id: "18",
    image: neemu,
  },
  {
    id: "19",
    image: neurotech,
  },
  {
    id: "20",
    image: ser,
  },
  {
    id: "22",
    image: sindpd,
  },
  {
    id: "23",
    image: sitepd,
  },
  {
    id: "24",
    image: stefaninni,
  },
  {
    id: "25",
    image: superTroco,
  },
  {
    id: "26",
    image: tecsinapse,
  },
  {
    id: "27",
    image: terra,
  },
  {
    id: "28",
    image: ustore,
  },
  {
    id: "29",
    image: viaparque,
  },
];

export default function Swipper() {
  return (
    <div className="swiper-container">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 90,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 90,
          },
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        centeredSlides={true}
        autoplay={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img src={item.image} alt="Slider" className="slide-item"></img>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev flex items-center justify-center">
          <img src={arrowLeft} alt="left arrow"></img>
        </div>
        <div className="swiper-button-next flex items-center justify-center">
          <img src={arrowRight} alt="right arrow"></img>
        </div>
      </Swiper>
    </div>
  );
}
