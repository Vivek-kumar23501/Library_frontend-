import React from "react";
import HeroSection from "../components/CarouselComp";
import ServicesPage from "./Services";
import Misson from "../components/OurMission";


const LandingPage = () => {
  return (
    <div>
      <HeroSection />  {/* Carousel + Info Cards */}
            <ServicesPage/>
            <Misson/>
    </div>
  );
};

export default LandingPage;
