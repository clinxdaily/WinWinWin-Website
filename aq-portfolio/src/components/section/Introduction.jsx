import React from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Users,
  Award,
} from "lucide-react";

const WinWinWinIntroduction = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Chuyên nghiệp, đầy đủ và an toàn",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Tiết kiệm chi phí và thời gian cho doanh nghiệp",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Lưu trữ, theo dõi hồ sơ đồng hành cùng doanh nghiệp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section - Centered */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              WINWINWIN
            </span>
            <br />
            <span className="text-lg md:text-xl font-medium text-gray-600">
              (INTERNATIONAL FOOD SERVICES)
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
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Đối Tác Tin Cậy Cho Chứng Nhận Chất Lượng
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-center mb-6">
                  <img
                    src="../../public/images/logo-avatar.jpg"
                    alt="WINWINWIN Logo"
                    className="max-h-[500px] w-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-blue-600">WINWINWIN</strong> tự hào là
                một tổ chức tư vấn công bố, chứng nhận độc lập, chuyên nghiệp và
                đủ năng lực tiến hành các hoạt động đánh giá tư vấn công bố,
                chứng nhận phù hợp cho doanh nghiệp của bạn.
              </p>

              <p>
                Chúng tôi tự hào là đối tác đáng tin cậy của các công ty, tổ
                chức và cá nhân trên khắp quốc gia, hỗ trợ họ trong việc thực
                hiện các hồ sơ công bố, chứng nhận, các tiêu chuẩn chất lượng và
                an toàn hàng đầu.
              </p>

              <p>
                Chúng tôi đảm bảo quy trình thực hiện tuân thủ các qui chuẩn,
                tiêu chuẩn, qui định chính phủ và quốc tế tạo ra sự an tâm, tiết
                kiệm chi phí và nhiều giá trị thiết thực cho khách hàng và cộng
                đồng.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                WINWINWIN nỗ lực đáp ứng các tiêu chí:
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-blue-600">{feature.icon}</div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinWinWinIntroduction;
