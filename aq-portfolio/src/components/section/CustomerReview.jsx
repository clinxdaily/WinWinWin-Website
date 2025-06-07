import React from "react";
import { Star, Quote } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn Long",
      position: "Giám đốc Doanh nghiệp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Dịch vụ tư vấn của WINWINWIN thực sự chuyên nghiệp và tận tâm. Đội ngũ luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc một cách nhanh chóng.",
      rating: "Xuất sắc",
      stars: 5,
    },
    {
      id: 2,
      name: "Trần Thị Huyền",
      position: "Trưởng phòng Kinh doanh",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "Quy trình làm việc rất chuyên nghiệp, minh bạch và hiệu quả. Tôi hoàn toàn tin tưởng vào chất lượng dịch vụ của WINWINWIN.",
      rating: "Tuyệt vời",
      stars: 5,
    },
    {
      id: 3,
      name: "Lê Minh Thúy",
      position: "Chủ cửa hàng",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Từ khi hợp tác với WINWINWIN, việc xử lý các thủ tục pháp lý trở nên dễ dàng và thuận tiện hơn rất nhiều.",
      rating: "Rất hài lòng",
      stars: 5,
    },
  ];

  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phản hồi từ khách hàng
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những phản hồi chân thực từ các khách hàng đã tin tưởng và sử dụng
            dịch vụ của chúng tôi
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-500" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">{renderStars(review.stars)}</div>

              {/* Review text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{review.content}"
              </blockquote>

              {/* Customer info */}
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Bạn cũng muốn trải nghiệm dịch vụ chuyên nghiệp của chúng tôi?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
