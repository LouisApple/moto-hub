import MapSearch from "@/app/mapSearch/page";
import AboutUs from "@/app/aboutUs/page";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import {AboutSection} from "@/components/ui/about-section";
import {ProjectTimeline} from "@/components/ui/project-timeline";
import PastRealisationAndPartners from "@/app/pastRealisationsAndPartners/page";
import {StatsSection} from "@/components/ui/stats-section";


export default function Home() {
  return (
      <div>
          <Hero/>
          <AboutSection/>
          <ProjectTimeline/>
          <StatsSection/>
          <PastRealisationAndPartners/>
          <AboutUs/>
          <MapSearch/>
      </div>
  );
}
