import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Ourservices from "./components/OurServices";
import GetStarted from "./components/GetStarted";
import OurTeam from "./components/OurTeam";
import "./index.css";

function App() {
  return <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Ourservices />
    <GetStarted />
    <OurTeam />
  </div>;
}

export default App;
