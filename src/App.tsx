import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Ourservices from "./components/OurServices";
import GetStarted from "./components/GetStarted";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Ourservices />
    <GetStarted />
    <OurTeam />
    <Footer />
  </div>;
}

export default App;
