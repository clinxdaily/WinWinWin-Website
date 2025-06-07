import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function CompanyProfileBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ảnh stock chuyên nghiệp
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
      title: "TƯ VẤN CÔNG BỐ, CHỨNG NHẬN",
      subtitle: "Thực phẩm - Mỹ phẩm - Bao bì - Thời trang",
      highlight: "UY TÍN - NHANH CHÓNG - CHÍNH XÁC",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
      title: "CHUYÊN NGHIỆP - HẬU MÃI",
      subtitle: "Trên 10 năm kinh nghiệm",
      highlight: "NHANH CHÓNG - CHÍNH XÁC",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
      title: "DỊCH VỤ CHUYÊN NGHIỆP",
      subtitle: "Đối tác tin cậy của doanh nghiệp",
      highlight: "100% TUÂN THỦ QUY ĐỊNH",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Shield, title: "Uy Tín", desc: "10+ năm kinh nghiệm" },
    { icon: Clock, title: "Nhanh Chóng", desc: "Quy trình tối ưu" },
    { icon: CheckCircle, title: "Chính Xác", desc: "100% tuân thủ" },
    { icon: Award, title: "Chuyên Nghiệp", desc: "Đội ngũ chuyên gia" },
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt="Business background"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        {/* Overlay phù hợp với tone website */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/75"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Content Area */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-4xl text-center">
            {/* Main Content */}
            <div className="mb-6">
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                style={{
                  textShadow: "2px 2px 6px rgba(0, 255, 255, 0.8)",
                }}
              >
                {currentSlideData.title}
              </h2>
              <div className="w-16 h-1 bg-cyan-400 mb-4 mx-auto"></div>

              {/* Subtitle */}
              <div className="mb-4">
                <div
                  className="text-[#efe1d9] text-xl lg:text-2xl font-bold mb-6 tracking-wide"
                  style={{
                    textShadow: "2px 2px 6px rgba(0, 255, 255, 0.8)",
                  }}
                >
                  {currentSlideData.subtitle}
                </div>
              </div>

              {/* Highlight */}
              <p
                className="bg-red-600 text-[#efe1d9] px-6 py-3 rounded-full font-semibold text-lg inline-block"
                style={{
                  textShadow: "2px 2px 6px rgba(0, 255, 255, 0.8)",
                }}
              >
                {currentSlideData.highlight}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="relative z-20 p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-white font-bold text-sm lg:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-xs lg:text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-cyan-400 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-xs">
            Thứ 2 - Thứ 7: 8:00 - 17:00
          </span>
        </div>
      </div>
    </div>
  );
}
