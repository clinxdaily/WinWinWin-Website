import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const TopBar = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: "#", color: "hover:text-cyan" },
    { icon: FaInstagram, url: "#", color: "hover:text-orange" },
    { icon: FaTwitter, url: "#", color: "hover:text-lightCyan" },
  ];

  return (
    <div className="bg-lightBrown/5 py-2 border-b border-lightGrey/10 hidden lg:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm text-brown font-body">
        {/* Bên trái: Số điện thoại + Email */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-cyan" />
            <span>0938 715 366</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-orange" />
            <span>congbowinwinwin@gmail.com</span>
          </div>
        </div>

        {/* Bên phải: Giờ làm việc + MXH */}
        <div className="flex items-center space-x-4">
          <span className="text-brown">Thứ 2 – Thứ 7: 8:00 – 17:00 |</span>
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                className={`text-brown ${social.color} transition-all duration-300 text-sm p-2 rounded-full hover:bg-white/50 hover:transform hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
