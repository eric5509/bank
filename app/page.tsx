import ExploreCountry from "@/Components/ExploreCountry";
import FirstThingToDo from "@/Components/FirstThingToDo";
import SearchByPropertyType from "@/Components/SearchByPropertyType";

export default function Home() {
  return (
    <main>
      <FirstThingToDo />
      <div className="h-20"></div>
      <ExploreCountry />
      <div className="h-20"></div>
      <SearchByPropertyType />
    </main>
  );
}
