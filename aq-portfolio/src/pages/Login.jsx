import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield, Sparkles } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Xử lý thành công - lưu thông tin user và token
        console.log("Login successful:", data);
        console.log("Token:", data.token);
        console.log("User info:", data.user);

        alert(`${data.message}\nWelcome ${data.user.email}!`);

        // Trong thực tế, bạn sẽ:
        // 1. Lưu token vào localStorage: localStorage.setItem('token', data.token)
        // 2. Lưu user info vào context/state management
        // 3. Redirect đến dashboard: navigate('/admin/dashboard')
      } else {
        // Xử lý các lỗi cụ thể từ backend
        switch (data.error) {
          case "INVALID_CREDENTIALS":
            setError("Email hoặc mật khẩu không đúng");
            break;
          case "ACCOUNT_DISABLED":
            setError("Tài khoản đã bị vô hiệu hóa");
            break;
          case "TOO_MANY_LOGIN_ATTEMPTS":
            setError(
              "Quá nhiều lần thử đăng nhập, vui lòng thử lại sau 15 phút"
            );
            break;
          case "VALIDATION_ERROR":
            setError("Dữ liệu không hợp lệ");
            break;
          default:
            setError(data.message || "Đăng nhập thất bại");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError("Không thể kết nối đến server. Kiểm tra kết nối mạng.");
      } else {
        setError("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, #581c87, #1e3a8a, #312e81)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ backgroundColor: "#a855f7" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ backgroundColor: "#06b6d4", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ backgroundColor: "#ec4899", animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-lg"
              style={{
                background:
                  "linear-gradient(to bottom right, #a855f7, #06b6d4)",
              }}
            >
              <Shield className="w-10 h-10" style={{ color: "#ffffff" }} />
            </div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{
                color: "#ffffff",
                background: "linear-gradient(to right, #c084fc, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Admin Portal
            </h1>
            <p style={{ color: "#d1d5db" }} className="text-lg">
              Welcome back to your dashboard
            </p>
          </div>

          {/* Login Card */}
          <div
            className="rounded-3xl p-8 shadow-2xl"
            style={{
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 mr-2" style={{ color: "#67e8f9" }} />
              <h2 className="text-2xl font-bold" style={{ color: "#ffffff" }}>
                Sign In
              </h2>
            </div>

            <div className="space-y-6">
              {/* Error Message */}
              {error && (
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <p className="text-sm" style={{ color: "#fca5a5" }}>
                    {error}
                  </p>
                </div>
              )}

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail
                    className="h-5 w-5 transition-colors"
                    style={{ color: "#9ca3af" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    backdropFilter: "blur(4px)",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock
                    className="h-5 w-5 transition-colors"
                    style={{ color: "#9ca3af" }}
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    backdropFilter: "blur(4px)",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-5 w-5 transition-colors hover:opacity-80"
                      style={{ color: "#9ca3af" }}
                    />
                  ) : (
                    <Eye
                      className="h-5 w-5 transition-colors hover:opacity-80"
                      style={{ color: "#9ca3af" }}
                    />
                  )}
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(to right, #9333ea, #0891b2)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.background =
                      "linear-gradient(to right, #7c3aed, #0e7490)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.background =
                      "linear-gradient(to right, #9333ea, #0891b2)";
                  }
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div
                      className="w-5 h-5 rounded-full animate-spin mr-2"
                      style={{
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        borderTop: "2px solid #ffffff",
                      }}
                    ></div>
                    Đang đăng nhập...
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Đăng nhập
                  </span>
                )}
              </button>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <button
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#9ca3af" }}
              >
                Forgot your password?
              </button>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-sm" style={{ color: "#9ca3af" }}>
              Secure admin access with advanced encryption
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: "linear-gradient(to right, #a855f7, #06b6d4, #a855f7)",
        }}
      ></div>
    </div>
  );
}

export default Login;
