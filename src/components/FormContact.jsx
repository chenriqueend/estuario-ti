import React from "react";

const FormContact = () => {
  const textToCopy = "contato@estuarioti.com.br";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Email copiado para a área de transferência!");
    } catch (err) {}
  };
  return (
    <div className="flex justify-center mt-12 ">
      <div
        className="border-2 border-white p-2 rad text-2xl cursor-pointer hover:border-lima"
        onClick={handleCopy}
      >
        contato@estuarioti.com.br
      </div>
    </div>
  );
};

export default FormContact;
