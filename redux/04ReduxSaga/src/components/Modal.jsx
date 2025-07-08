import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto mx-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
