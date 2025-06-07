import "./App.css";
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

function App() {
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

export default App;
