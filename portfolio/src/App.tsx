import "./App.css";

// Components

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Lessons from "./pages/Lessons";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// Other
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
