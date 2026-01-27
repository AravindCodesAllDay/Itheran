import AboutUs from "@/components/home/AboutUs";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import RoadMap from "@/components/home/RoadMap";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <div>
      <div className="reveal">
        <Hero />
      </div>
      <div className="reveal">
        <Service />
      </div>
      <div className="reveal">
        <RoadMap />
      </div>
      <div className="reveal">
        <AboutUs />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </div>
  );
}
