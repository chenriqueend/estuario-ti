import React, { useEffect, useState } from "react";
import ArrowBottom from "../assets/arrowBottomNavigator.svg";
import { useMediaQuery } from "react-responsive";

const ArrowBottomNavigator = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [scrollValue, setScrollValue] = useState(975);

  // Função para mover a tela para baixo
  const scrollToContent = () => {
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isMobile) {
      setScrollValue(1140);
    }
  }, [isMobile]);

  return (
    <div className="self-center transform  md:translate-y-[-4rem] translate-y-[-16rem]">
      <img
        src={ArrowBottom}
        alt="ArrowBottom"
        onClick={() => {
          scrollToContent();
        }}
        className="cursor-pointer transition duration-300 w-[69px] h-[36px] "
      />
    </div>
  );
};

export default ArrowBottomNavigator;
