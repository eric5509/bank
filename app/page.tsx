import ExploreCountry from "@/Components/ExploreCountry";
import FirstThingToDo from "@/Components/FirstThingToDo";
import Hero from "@/Components/Hero";
import Inspiration from "@/Components/Inspiration";
import SearchByPropertyType from "@/Components/SearchByPropertyType";
import TemplateA from "@/Components/TemplateA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TemplateA />
      <div className="h-10"></div>
      <Inspiration />
      <div className="h-10"></div>
      <FirstThingToDo />
      <div className="h-10"></div>
      <ExploreCountry />
      <div className="h-10"></div>
      <SearchByPropertyType />
    </main>
  );
}
