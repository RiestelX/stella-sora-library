import { useState } from "react";
import { trekkers } from "~/data";
import TrekkerCard from "../components/trekkerCard";
import TrekkerFilterBar from "../components/trekkerFilterBar";

export default function Trekker() {
  const [filters, setFilters] = useState({
    search: "",
    element: "All",
    rarity: "All",
    combatType: "Combat Type",
    featureType: "Feature Type",
    faction: "Any Faction",
    style: "All",
  });

  const handleChange = (key: string, value: string) =>
    setFilters(prev => ({ ...prev, [key]: value }));
  const handleReset = () =>
    setFilters({ search: "", element: "All", rarity: "All", combatType: "Combat Type", featureType: "Feature Type", faction: "Any Faction", style: "All" });

  const filteredTrekkers = trekkers.filter(t => {
    const match = (key: keyof typeof filters, val: any) => {
      const ignoreValues = ["All", "Combat Type", "Feature Type", "Any Faction", "Style"];
      return (
        ignoreValues.includes(filters[key]) ||
        String(val).toLowerCase() === filters[key].toLowerCase()
      );
    };

    return (
      (!filters.search || t.name.toLowerCase().includes(filters.search.toLowerCase())) &&
      match("element", t.element) &&
      match("rarity", t.rarity) &&
      match("combatType", t.combatType) &&
      match("featureType", t.featureType) &&
      match("faction", t.faction) &&
      match("style", t.style)
    );
  });

  return (
    <div className="min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4 tracking-wide">
        Trekker <span className="text-gray-400 text-sm">({filteredTrekkers.length} total)</span>
      </h2>

      <TrekkerFilterBar filters={filters} onChange={handleChange} onReset={handleReset} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 mt-6">
        {filteredTrekkers.map(t => (
          <TrekkerCard key={t.id} trekker={t} />
        ))}
      </div>
    </div>
  );
}
