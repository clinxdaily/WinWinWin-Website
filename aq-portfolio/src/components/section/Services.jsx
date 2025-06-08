import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "/images/service/FSSC-22000-1024x576-1-768x432.jpg",
      title: "CHỨNG NHẬN FSSC 22000",
      description:
        "Trong thời đại mà an toàn thực phẩm không còn là lựa chọn, mà là tiêu chuẩn bắt buộc, các doanh nghiệp trong ngành F&B (thực phẩm – đồ uống) đang không ngừng cải tiến để đáp ứng kỳ vọng ngày càng cao từ người tiêu dùng...",
    },
    {
      id: 2,
      image: "/images/service/chung-nhan-atvstp-thumb-768x480.jpg",
      title: "CHỨNG NHẬN AN TOÀN THỰC PHẨM",
      description:
        "Chứng nhận an toàn thực phẩm là văn bản pháp lý được cơ quan nhà nước hoặc tổ chức được ủy quyền cấp cho các cơ sở sản xuất, kinh doanh thực phẩm, xác nhận rằng sản phẩm hoặc quy trình sản xuất tuân thủ đầy đủ...",
    },
    {
      id: 3,
      image: "/images/service/vietgap-la-gi-1-768x480.jpg",
      title: "CHỨNG NHẬN VIETGAP",
      description:
        "Trong bối cảnh hội nhập toàn cầu ngày càng sâu rộng, người tiêu dùng ngày càng quan tâm đến chất lượng, độ an toàn và nguồn gốc thực phẩm. Do đó, việc xây dựng chuỗi cung cấp thực phẩm nông sản an toàn không còn là lựa chọn...",
    },
    {
      id: 4,
      image: "/images/service/HO-SO-TU-CONG-BO-1-768x768.jpg",
      title: "HỒ SƠ TỰ CÔNG BỐ",
      description:
        "Sản phẩm muốn lưu thông ra ngoài thị trường một cách hợp pháp và đúng luật bắt buộc các cá nhân, công ty, tổ chức kinh doanh sản phẩm phải thực hiện tự công bố sản phẩm hoặc đăng ký công bố. Vậy hồ sơ công bố chất lượng sản phẩm bao gồm...",
    },
    {
      id: 5,
      image: "/images/service/DANG-KY-SO-HUU-TRI-TUE-1-768x768.jpg",
      title: "ĐĂNG KÝ SỞ HỮU TRÍ TUỆ",
      description:
        "Đăng ký sở hữu trí tuệ là một việc làm rất quan trọng và cần thiết của chủ sở hữu để bảo vệ được tài sản trí tuệ của mình, việc đăng ký sẽ giúp khách hàng được độc quyền sử dụng sản phẩm đã đăng ký trên toàn lãnh thổ Việt Nam...",
    },
    {
      id: 6,
      image: "/images/service/DANG-KY-MA-VACH-1-768x768.jpg",
      title: "ĐĂNG KÝ MÃ VẠCH",
      description:
        "Mã số mã vạch là một giải pháp nhằm tạo thuận lợi và nâng cao năng suất, hiệu quả trong bán hàng và quản lý hàng hóa với một loại mã hiệu đặc biệt. Mã số mã vạch của hàng hoá bao gồm hai phần: mã số của hàng hoá và mã vạch...",
    },
  ];

  return (
    <section className="py-2 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            <br />
            <span className="text-lg md:text-xl font-bold text-gray-600">
              CÁC DỊCH VỤ CAO CẤP
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
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Là đối tác và nhà tư vấn tin cậy của nhiều doanh nghiệp thực phẩm
            lớn trong nước và quốc tế. WINWINWIN hân hạnh đồng hành cùng doanh
            nghiệp trong các lĩnh vực
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ borderColor: "#f3f4f6", border: "1px solid" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-3 group-hover:transition-colors duration-300"
                  style={{ color: "#111827", "&:hover": { color: "#2563eb" } }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-4"
                  style={{ color: "#4b5563" }}
                >
                  {service.description}
                </p>

                {/* Chi tiết button */}
                <div className="flex justify-start">
                  <button
                    className="inline-flex items-center font-medium text-sm hover:transition-colors duration-200"
                    style={{ color: "#2563eb" }}
                    onMouseEnter={(e) => (e.target.style.color = "#1d4ed8")}
                    onMouseLeave={(e) => (e.target.style.color = "#2563eb")}
                  >
                    Chi tiết
                    <svg
                      className="ml-1 w-4 h-4"
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
              </div>
            </div>
          ))}
        </div>

        {/* Xem thêm button */}
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

      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
