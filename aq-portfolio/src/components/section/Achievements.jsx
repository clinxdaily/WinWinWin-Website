import React, { useState } from "react";

const AchievementSection = () => {
  const achievements = [
    {
      title: "NGHIÊN CỨU VÀ PHÁT TRIỂN",
      subtitle: "SẢN PHẨM",
      description: "Đội ngũ R&D chuyên nghiệp với nhiều năm kinh nghiệm",
      sphereColor: "#FF6B6B",
      glowColor: "#FF6B6B",
    },
    {
      title: "LẬP KẾ HOẠCH",
      subtitle: "SẢN XUẤT SẢN PHẨM",
      description: "Quy trình lập kế hoạch chi tiết và hiệu quả",
      sphereColor: "#4ECDC4",
      glowColor: "#4ECDC4",
    },
    {
      title: "XÂY DỰNG QUI TRÌNH",
      subtitle: "SẢN XUẤT",
      description: "Tiêu chuẩn hóa mọi khâu trong dây chuyền sản xuất",
      sphereColor: "#45B7D1",
      glowColor: "#45B7D1",
    },
  ];

  return (
    <div
      className="w-full py-2 px-4"
      style={{
        background: "#e2e6e2",
      }}
    >
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .rotate-animation {
          animation: rotate 15s linear infinite;
        }
        
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .sphere {
          width: 20vw;       
          height: 20vw;     
          max-width: 100px; 
          max-height: 100px;
          border-radius: 50%;
          position: relative;
          background: radial-gradient(circle at 30% 30%, var(--sphere-light), var(--sphere-color), var(--sphere-dark));
          box-shadow: 
            0 0 40px var(--glow-color),
            0 10px 30px rgba(0,0,0,0.3);
          border: 2px solid rgba(255,255,255,0.2);
        }
        
        .sphere::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 20%;
          width: 25%;
          height: 25%;
          background: radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.3));
          border-radius: 50%;
          filter: blur(2px);
        }
        
        .sphere::after {
          content: '';
          position: absolute;
          bottom: 20%;
          right: 25%;
          width: 15%;
          height: 15%;
          background: radial-gradient(circle, rgba(255,255,255,0.6), transparent);
          border-radius: 50%;
          filter: blur(1px);
        }
        
        .control-btn {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          width: 10vw;        
          height: 10vw;
          max-width: 50px;    
          max-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #333;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .control-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .achievement-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .achievement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
            <br />
            <span className="text-lg md:text-xl font-bold text-gray-600">
              CÁC LĨNH VỰC CHUYÊN MÔN
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

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card text-center">
              {/* Sphere */}
              <div className="flex justify-center mb-6">
                <div
                  className="sphere rotate-animation pulse-animation float-animation"
                  style={{
                    "--sphere-light": item.sphereColor + "40",
                    "--sphere-color": item.sphereColor,
                    "--sphere-dark": item.sphereColor + "CC",
                    "--glow-color": item.glowColor + "40",
                    animationDelay: `${index * 1.5}s`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: item.sphereColor }}
                >
                  {item.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
