import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer"; 
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <Router>
      <NavbarComp />
     
      <Routes>
       <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
