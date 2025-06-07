import React from "react";

const links = [
  { link: "TRANG CHỦ", section: "trangchu" },
  { link: "VỀ CHÚNG TÔI", section: "vechungtoi" },
  { link: "DỊCH VỤ", section: "dichvu" },
  { link: "KIẾN THỨC", section: "kienthuc" },
  { link: "TUYỂN DỤNG", section: "tuyendung" },
  { link: "LIÊN HỆ", section: "lienhe" },
];

const NavbarLink = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 font-body">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a
              href={`#${link.section}`}
              className="block py-2 px-3 text-brown hover:text-cyan transition-colors duration-300 font-bold text-sm tracking-wide relative group"
            >
              {link.link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLink;
