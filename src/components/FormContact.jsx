import React from "react";

const FormContact = () => {
  return (
    <div className="flex justify-center mt-12 ">
      <div className="flex-column">
        <form action="">
          <label
            htmlFor="message"
            className="block mb-2 text-1xl font-medium text-[#DAFF00] "
          >
            Entre em contato
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-[20rem] lg:w-[66rem] md:w-[38rem] text-sm 
            rounded-lg border border-gray-600 
          valid:border-lima bg-[#112329] 
          placeholder-gray-400 text-white
          autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
          autofill:duration-[5000000ms]
         autofill:!text-white"
            placeholder="Escreva o texto para o email."
            required
          ></textarea>
          <div className="flex pt-4 gap-3">
            <input
              type="email"
              id="email"
              className={` border   text-sm
         rounded-lg block w-[60%] md:w-[30%]
         p-2.5 border-gray-600 placeholder-gray-400  
         text-white valid:border-lima bg-[#112329]
         focus:bg-[#112329]
          autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
           autofill:duration-[5000000ms]
          autofill:!text-white
         `}
              placeholder="Seu email."
              required
            ></input>
            <button
              className="bg-[#DAFF00] w-[120px] rounded-md font-medium 
       py-2 hover:scale-105 duration-300"
              onClick={() => {
                // sendMail();
              }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
