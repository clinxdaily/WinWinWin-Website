// NavbarLogo.jsx - CHỈ THAY TITLE THÀNH LOGO
import React from "react";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="../../../public/images/logo.png"
        alt="Company Logo"
        className="h-10 w-auto"
        onError={(e) => {
          // Fallback về text nếu không tìm thấy logo
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className="hidden items-center" style={{ display: "none" }}>
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
          AQ
        </span>
      </div>
    </div>
  );
};

export default NavbarLogo;
