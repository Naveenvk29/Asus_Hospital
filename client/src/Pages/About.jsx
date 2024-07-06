// import React from "react";
import Hero from "./Home/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero title={"Learn More About Us | ASUS Medical Institute"} />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
