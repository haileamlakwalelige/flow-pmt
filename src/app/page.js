import Hero from "@/components/homepage/Hero";
import HomeAccordion from "@/components/homepage/HomeAccordion";
import HomeCallToAction from "@/components/homepage/HomeCallToAction";
import HomeFeature from "@/components/homepage/HomeFeature";
import HomeHow from "@/components/homepage/HomeHow";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <HomeFeature />
      <HomeHow />
      <HomeAccordion />
      <HomeCallToAction />
    </div>
  );
};

export default page;
