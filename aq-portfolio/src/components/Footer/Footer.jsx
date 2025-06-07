import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-gray-800 relative overflow-hidden"
      style={{ backgroundColor: "#F5F0ED" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-auto h-auto"
                />
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "#1F2937" }}>
                  Kết nối với chúng tôi
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#1877F2" }}
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#0A66C2" }}
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#FF0000" }}
                  >
                    <Youtube size={18} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#1DA1F2" }}
                  >
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-semibold mb-6 text-lg"
                style={{ color: "#1F2937" }}
              >
                Liên kết nhanh
              </h4>
              <ul className="space-y-3">
                {[
                  "Về chúng tôi",
                  "Dịch vụ",
                  "Kiến thức",
                  "Tin tức",
                  "Khách hàng",
                  "Liên hệ",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-red-600"
                      style={{ color: "#6B7280" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="font-semibold mb-6 text-lg"
                style={{ color: "#1F2937" }}
              >
                Thông tin liên hệ
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="mt-1 flex-shrink-0"
                    size={18}
                    style={{ color: "#DC2626" }}
                  />
                  <div>
                    <p className="text-sm" style={{ color: "#4B5563" }}>
                      66 Đường 270 Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí
                      Minh, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={18} style={{ color: "#DC2626" }} />
                  <a
                    href="tel:+84123456789"
                    className="text-sm transition-colors duration-300 hover:text-red-600"
                    style={{ color: "#4B5563" }}
                  >
                    0938 715 366
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={18} style={{ color: "#DC2626" }} />
                  <a
                    href="mailto:info@winwinwincorp.com"
                    className="text-sm transition-colors duration-300 hover:text-red-600"
                    style={{ color: "#4B5563" }}
                  >
                    congbowinwinwin@gmail.com
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    className="mt-1 flex-shrink-0"
                    size={18}
                    style={{ color: "#DC2626" }}
                  />
                  <div>
                    <p className="text-sm" style={{ color: "#4B5563" }}>
                      Thứ 2 - Thứ 7: 8:00 - 17:30
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps */}
            <div>
              <h4
                className="font-semibold mb-4 text-lg"
                style={{ color: "#1F2937" }}
              >
                Bản đồ
              </h4>
              <div
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ width: "100%", maxWidth: 600 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.986897446527!2d106.67443107512818!3d10.735492959947194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb2af65b8df%3A0x7f3854165a09e6c1!2zNjYgMjcwIENhbyBM4buXLCBLaHUgcGjhu5EgMTAsIFF14bqtbiA4LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1749287164672!5m2!1svi!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: "#D1D5DB" }}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p
                className="text-sm text-center md:text-left"
                style={{ color: "#6B7280" }}
              >
                © 2025 WINWINWIN International Food Services. Tất cả quyền được
                bảo lưu.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-red-600"
                  style={{ color: "#6B7280" }}
                >
                  Chính sách bảo mật
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-red-600"
                  style={{ color: "#6B7280" }}
                >
                  Điều khoản sử dụng
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-red-600"
                  style={{ color: "#6B7280" }}
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
