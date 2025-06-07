import React from "react";
import { Star, Shield, Award, CheckCircle } from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="py-8 bg-offwhite">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div
                className="text-lg font-medium mb-4"
                style={{ color: "#DC2626" }}
              >
                # Kỹ năng
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#1F2937" }}
              >
                Các kỹ năng tạo nên sự khác biệt
                <br />
                <span style={{ color: "#2563EB" }}>
                  có ý nghĩa cho doanh nghiệp
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                Chúng tôi hiểu rõ các vấn đề về sản xuất kinh doanh{" "}
                <strong>thực phẩm, mỹ phẩm, bao bì thực phẩm...</strong> an toàn
                thực phẩm.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                Chúng tôi hiểu rõ các qui định hiện hành đối với từng đối tượng
                cụ thể để áp dụng. Với đội ngũ chuyên viên có{" "}
                <strong style={{ color: "#2563EB" }}>
                  kiến thức, kinh nghiệm và kỹ năng giao tiếp tốt
                </strong>{" "}
                để trao đổi thông tin, lắng nghe mong muốn khách hàng để{" "}
                <strong>đáp ứng kịp thời và chuyên nghiệp</strong>.
              </p>
            </div>
          </div>

          {/* Right Column - WinWinWin Card */}
          <div className="relative">
            {/* Background decorative elements */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
              style={{ backgroundColor: "#059669" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
              style={{ backgroundColor: "#2563EB" }}
            ></div>

            {/* Main Card */}
            <div
              className="relative bg-white rounded-3xl p-8 border-4 shadow-2xl"
              style={{ borderColor: "#059669" }}
            >
              {/* Header with Logo  */}
              <div className="flex items-center mb-6">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-auto h-auto"
                />
              </div>

              {/* Main Service Title */}
              <div className="text-center mb-6">
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#DC2626" }}
                >
                  TƯ VẤN CÔNG BỐ, CHỨNG NHẬN
                </h4>
              </div>

              {/* Service Categories */}
              <div
                className="bg-white rounded-2xl p-6 mb-6 border-2"
                style={{ backgroundColor: "#F0FDF4", borderColor: "#059669" }}
              >
                <div className="text-center">
                  <div
                    className="text-lg font-bold text-white px-6 py-3 rounded-xl"
                    style={{ backgroundColor: "#059669" }}
                  >
                    Thực phẩm - Mỹ phẩm - Bao bì - Thời trang
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="text-center">
                <h5
                  className="text-xl font-bold tracking-wider"
                  style={{ color: "#DC2626" }}
                >
                  UY TÍN - NHANH CHÓNG - CHÍNH XÁC
                </h5>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <Shield className="w-12 h-12" style={{ color: "#059669" }} />
              </div>
              <div className="absolute bottom-4 left-4 opacity-10">
                <Award className="w-10 h-10" style={{ color: "#059669" }} />
              </div>
              <div className="absolute top-1/2 left-4 opacity-10">
                <CheckCircle className="w-8 h-8" style={{ color: "#059669" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
