import React from "react";
import { GrSearch } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx"

const NavBar = () => {
  const iconStyle = {
    fontSize: "20px", // You can adjust the size as needed
    color: "blue", // Set the desired color here
  };
  return (
    <div className="flex p-6 sticky top-0 left-0 right-0 bg-opacity-10 z-100 backdrop-blur-2xl">
      <div className="hidden w-1/4 font-semibold items-center text-2xl xl:flex">
        <img src="/images/apple-touch-icon.png" alt="Logo" className="h-8 mr-2" />
        <h1>ADMIN.IO</h1>
      </div>
      <div className="flex w-full justify-between xl:w-3/4">
        <div className="relative flex items-center  w-full xs:w-[350px] xl:w-[300px]">
          <div className="flex justify-center items-center h-12 w-12 mr-4 rounded-full hover:bg-gray-200 cursor-pointer xl:hidden">
          <RxHamburgerMenu className="text-2xl"/>
          </div>
          <GrSearch
            className="absolute left-[70px] top-4 text-lg text-gray-300 xs:left-20 xl:left-4"
            style={iconStyle}
          />
          <input
            type="text"
            name="search"
            id="search"
            className="block w-[100%] h-12 pl-12 pr-2 border border-gray-400 text-gray-600 text-xl bg-gray-50 rounded-full focus:border-2 focus:border-[#9254fd] focus:outline-none"
          />
        </div>
        <div className="flex items-center">
            <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-gray-200">
            <IoNotificationsOutline className="text-2xl cursor-pointer"/>
            </div>
            <img src="/images/avatars/1.png" alt="Profile" className="rounded-full ml-6 h-12 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
