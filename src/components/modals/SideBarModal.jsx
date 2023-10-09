import React from "react";

const SideBarModal = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full">
        <div className="fixed inset-0 bg-[rgb(114,110,121)] opacity-75"></div>
        <div className="relative w-1/4 bg-white p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800"
        //   onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold">Modal Title</h2>
        <p>Modal content goes here.</p>
      </div>
      </div>
    </>
  );
};

export default SideBarModal;
