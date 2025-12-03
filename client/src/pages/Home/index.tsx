import Hero from "../../components/home/Hero";
import Service from "../../components/home/Service";
import Contact from "../../components/home/Contact";
import AboutUs from "../../components/home/AboutUs";
import RoadMap from "../../components/home/RoadMap";

export default function Home() {
  return (
    <div className="text-DARK-PRIMARY">
      <Hero />
      <Service />
      <RoadMap />
      <AboutUs />
      <Contact />
    </div>
  );
}
