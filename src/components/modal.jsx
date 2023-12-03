import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">
      <div className="relative">
        <button
          className="absolute top-[-2rem] right-1 text-white"
          onClick={onClose}
        >
          Fechar
        </button>
        <div className="bg-black p-4 rounded-md">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
