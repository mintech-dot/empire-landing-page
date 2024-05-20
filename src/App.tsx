import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Ourservices from "./components/OurServices";
import GetStarted from "./components/GetStarted";
import "./index.css";

function App() {
  return <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Ourservices />
    <GetStarted />
  </div>;
}

export default App;
