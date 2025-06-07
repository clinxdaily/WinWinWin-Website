import React from "react";
import { FaPhone } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <div className="flex items-center mt-4 md:mt-0">
      <button className="bg-gradient-to-r from-cyan to-darkCyan hover:from-darkCyan hover:to-cyan text-white font-body font-medium rounded-full px-6 py-2.5 text-sm inline-flex items-center transition-all duration-300 shadow-cyanShadow hover:shadow-lg transform hover:-translate-y-0.5">
        <FaPhone className="mr-2" />
        Contact Me
      </button>
    </div>
  );
};

export default NavbarBtn;
