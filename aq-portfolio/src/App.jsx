import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyProfileBanner from "./components/banner/Banner";
import Footer from "./components/Footer/Footer";
import NavbarMain from "./components/navbar/NavbarMain";
import AchievementSection from "./components/section/Achievements";
import CustomerReviews from "./components/section/CustomerReview";
import Introduction from "./components/section/Introduction";
import KnowledgeSection from "./components/section/Knowledge";
import ServicesSection from "./components/section/Services";
import SkillsSection from "./components/section/Skill";
import TopBar from "./components/topbar/TopBar";

import Login from "./pages/Login"; // 👈 Thêm dòng này

function Home() {
  return (
    <main className="font-body">
      <TopBar />
      <NavbarMain />
      <CompanyProfileBanner />
      <Introduction />
      <AchievementSection />
      <ServicesSection />
      <KnowledgeSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* 👈 Route đăng nhập */}
      </Routes>
    </Router>
  );
}

export default App;
