import React from "react";

const FormContact = () => {
  return (
    <div className="flex justify-center mt-12 ">
      <div className="flex-column">
        <form action="">
          <label
            htmlFor="message"
            className="block mb-4 md:text-2xl text-base font-bold  text-[#DAFF00] "
          >
            Entre em contato
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-[20rem] lg:w-[66rem] md:w-[38rem] text-sm 
            rounded-lg border-2 border-white 
          valid:border-lima bg-[#0F1621] 
          placeholder-gray-400 text-white
          autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
          autofill:duration-[5000000ms]
         autofill:!text-white"
            placeholder="Mensagem"
            required
          ></textarea>
          <div className="flex pt-4 gap-3">
            <input
              type="email"
              id="email"
              className={` border-2  text-sm
                rounded-lg block w-[60%] md:w-[30%]
                p-2.5 border-white placeholder-gray-400  
                text-white valid:border-lima bg-[#0F1621]
                focus:bg-[#0F1621]
                  autofill:shadow-[inset_0_0_0px_1000px_rgb(17,35,41)]
                  autofill:duration-[5000000ms]
                  autofill:!text-white
                `}
              placeholder="Email"
              required
            ></input>
            <button
              className="bg-[#DAFF00] w-[120px] rounded-md text-black font-medium 
               py-2 hover:scale-105 duration-300"
              onClick={() => {
                //Clique responsável por enviar o email, aqui ficará a função conectada ao backend.
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
