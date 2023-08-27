import { Routes, Route } from "react-router-dom";

// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page imports
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/about" element={<About />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
