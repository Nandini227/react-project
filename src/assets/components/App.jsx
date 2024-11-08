import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
