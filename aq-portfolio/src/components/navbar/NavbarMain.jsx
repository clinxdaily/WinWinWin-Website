// NavbarMain.jsx - FULL WIDTH RESPONSIVE NAVBAR with TopBar in Mobile Menu
import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "#",
      color: "hover:text-cyan",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      url: "#",
      color: "hover:text-orange",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      url: "#",
      color: "hover:text-lightCyan",
      label: "Twitter",
    },
  ];

  return (
    <nav className="w-full bg-white shadow-lg border-b border-lightGrey/20 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <NavbarLogo />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brown rounded-lg md:hidden hover:bg-lightBrown/10 focus:outline-none focus:ring-2 focus:ring-cyan/30 transition-all duration-300"
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8 xl:space-x-10">
            <NavbarLink />
            <NavbarBtn />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden pb-6 border-t border-lightGrey/10 mt-2 pt-4`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 mb-6 text-center">
            <NavbarLink />
            <div className="pt-4 border-t border-lightGrey/10 flex justify-center">
              <NavbarBtn />
            </div>
          </div>

          {/* TopBar Info Section - Chỉ hiện trong mobile */}
          <div className="p-4 bg-offWhite rounded-lg border">
            {/* Contact Info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-brown text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-cyan/10 rounded-full mr-3">
                  <FaPhone className="text-cyan text-xs" />
                </div>
                <div>
                  <div className="font-medium">Hotline</div>
                  <div className="text-xs opacity-80">0938 715 366</div>
                </div>
              </div>

              <div className="flex items-center text-brown text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-orange/10 rounded-full mr-3">
                  <FaEnvelope className="text-orange text-xs" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-xs opacity-80">
                    congbowinwinwin@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center text-brown text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-lightCyan/10 rounded-full mr-3">
                  <FaClock className="text-lightCyan text-xs" />
                </div>
                <div>
                  <div className="font-medium">Giờ làm việc</div>
                  <div className="text-xs opacity-80">
                    Thứ 2 – Thứ 7: 8:00 – 17:00
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-3 border-t border-lightGrey/10">
              <div className="text-brown text-sm font-medium mb-3">
                Kết nối với chúng tôi
              </div>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center justify-center w-10 h-10 text-brown ${social.color} transition-all duration-300 rounded-full bg-white border border-lightGrey/20 hover:bg-white shadow-sm hover:shadow-md hover:transform hover:scale-110`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
