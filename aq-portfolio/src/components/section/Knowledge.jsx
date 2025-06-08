import React, { useState, useRef } from "react";

const KnowledgeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const services = [
    {
      id: 1,
      image: "/images/knowledge/nhanhieu.jpg",
      title: "Đăng Ký Nhãn Hiệu Tại Việt Nam",
      description:
        "Trong thời đại mà an toàn thực phẩm không còn là lựa chọn, mà là tiêu chuẩn bắt buộc, các doanh nghiệp trong ngành F&B (thực phẩm – đồ uống) đang không ngừng cải tiến để đáp ứng kỳ vọng ngày càng cao từ người tiêu dùng...",
    },
    {
      id: 2,
      image: "/images/knowledge/luatphap.jpg",
      title:
        "Thông tư 17 /2023/TT-BYT sửa đổi, bổ sung và bãi bỏ một số văn bản quy phạm pháp luật về an toàn thực phẩm do Bộ trưởng Bộ Y tế ban hành",
      description:
        "Chứng nhận an toàn thực phẩm là văn bản pháp lý được cơ quan nhà nước hoặc tổ chức được ủy quyền cấp cho các cơ sở sản xuất, kinh doanh thực phẩm, xác nhận rằng sản phẩm hoặc quy trình sản xuất tuân thủ đầy đủ...",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop",
      title: "Vì Sao Phải Công Bố Thực Phẩm",
      description:
        "Trong bối cảnh hội nhập toàn cầu ngày càng sâu rộng, người tiêu dùng ngày càng quan tâm đến chất lượng, độ an toàn và nguồn gốc thực phẩm. Do đó, việc xây dựng chuỗi cung cấp thực phẩm nông sản an toàn không còn là lựa chọn...",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop",
      title: "Xin giấy phép an toàn vệ sinh thực phầm cho nhà hàng",
      description:
        "Sản phẩm muốn lưu thông ra ngoài thị trường một cách hợp pháp và đúng luật bắt buộc các cá nhân, công ty, tổ chức kinh doanh sản phẩm phải thực hiện tự công bố sản phẩm hoặc đăng ký công bố. Vậy hồ sơ công bố chất lượng sản phẩm bao gồm...",
    },
  ];

  // Touch/Swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="py-8 bg-gradient-to-br from-#f8fafc via-#e0f2fe to-#dbeafe"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #dbeafe 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            <br />
            <span className="text-lg md:text-xl font-bold text-gray-600">
              THÔNG TIN / KIẾN THỨC
            </span>
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <hr
              className="border-t-3 w-32"
              style={{ borderColor: "#06b6d4" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#06b6d4" }}
            ></div>
            <hr
              className="border-t-3 w-32"
              style={{ borderColor: "#06b6d4" }}
            />
          </div>
        </div>

        {/* Slider Container */}
        <div
          className="relative rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Main Slider */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-[500px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div
                      className="absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-semibold"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(4px)",
                        color: "#374151",
                      }}
                    >
                      {index + 1} / {services.length}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="mb-4">
                      <span
                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                        style={{
                          backgroundColor: "#dbeafe",
                          color: "#1e40af",
                        }}
                      >
                        Kiến thức
                      </span>
                    </div>

                    <h2
                      className="text-2xl lg:text-3xl font-bold mb-6 leading-tight"
                      style={{ color: "#111827" }}
                    >
                      {service.title}
                    </h2>

                    <p
                      className="text-base lg:text-lg leading-relaxed mb-8"
                      style={{ color: "#4b5563" }}
                    >
                      {service.description}
                    </p>

                    <button
                      className="inline-flex items-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit"
                      style={{
                        background:
                          "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background =
                          "linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background =
                          "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)";
                      }}
                    >
                      Chi tiết
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(4px)",
              color: "#1f2937",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            }}
          >
            <svg
              className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(4px)",
              color: "#1f2937",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            }}
          >
            <svg
              className="w-6 h-6 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center mt-8 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === currentSlide ? "32px" : "12px",
                height: "12px",
                backgroundColor: index === currentSlide ? "#2563eb" : "#d1d5db",
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.target.style.backgroundColor = "#9ca3af";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.target.style.backgroundColor = "#d1d5db";
                }
              }}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg hover:transition-colors duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#2563eb" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
          >
            Xem thêm
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
