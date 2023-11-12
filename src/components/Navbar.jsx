import React from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.svg";

const Navbar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  return (
    <div className="flex justify-between items-center h-16 max-w-[100%] mx-auto px-4 text-white bg-tarawera ">
      <div className="flex sm:px-[28rem] md:px-[10rem] space-x-3 items-center ">
        <img
          src={logo}
          alt="Estuário TI Logo"
          className="inline-block w-6 h-6"
        />
        <h1 className="text-lima pb-0.5 font-sans text-3xl font-semibold whitespace-nowrap">
          Estuário TI
        </h1>
      </div>

      {/* <ul className="hidden md:flex">
        Header routes
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul> */}

      {/** Funcionalidade de navegação pelas rotas*/}
      {/* <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul> */}
    </div>
  );
};

export default Navbar;
