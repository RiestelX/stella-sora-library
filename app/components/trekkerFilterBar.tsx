import { RotateCcw, Star } from "lucide-react";
import { TREKKER_OPTIONS } from "../data/trekkerInterface";

interface TrekkerFilterBarProps {
  filters: {
    search: string;
    element: string;
    rarity: string;
    combatType: string;
    featureType: string;
    faction: string;
    style: string;
  };
  onChange: (key: string, value: string) => void;
  onReset: () => void;
}

export default function TrekkerFilterBar({ filters, onChange, onReset }: TrekkerFilterBarProps) {
  const elementIcons = TREKKER_OPTIONS.elements.map(e => e.toLowerCase());

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 p-3 bg-gray-900/70 rounded-md border border-gray-700">
      {/* search */}
      <input
        type="text"
        placeholder="Search trekkers..."
        value={filters.search}
        onChange={e => onChange("search", e.target.value)}
        className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600 w-52 h-[38px]"
      />

      {/* element */}
      <div className="flex gap-1 items-center">
        {elementIcons.map(el => (
          <button
            key={el}
            onClick={() => onChange("element", el === filters.element ? "All" : el)}
            className={`p-1 rounded ${filters.element === el ? "bg-blue-500" : "hover:bg-gray-700"}`}
          >
            <img
              src={`${import.meta.env.BASE_URL}icons/element/Icon_${el}.png`}
              className="w-8 h-8"
            />
          </button>
        ))}
      </div>

      {/* rarity */}
      <div className="inline-flex rounded-md overflow-hidden border border-gray-700 bg-gray-800 h-[38px]">
        {[{ label: <Star size={16} />, value: "All" }, ...TREKKER_OPTIONS.rarities.map(r => ({ label: `${r} ★`, value: String(r) }))].map(r => (
          <button
            key={r.value}
            onClick={() => onChange("rarity", filters.rarity === r.value ? "All" : r.value)}
            className={`px-3 py-1 text-md font-medium transition-colors ${
              filters.rarity === r.value ? "bg-sky-500 text-black" : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* combat type */}
      <div className="inline-flex rounded-md overflow-hidden border border-gray-700 bg-gray-800 h-[38px]">
        {[{ label: <Star size={16} />, value: "Combat Type" }, ...TREKKER_OPTIONS.combatTypes.map(ct => ({
          label: (
            <img
              src={`${import.meta.env.BASE_URL}icons/combat/${ct.toLowerCase()}.png`}
              className="w-5 h-5"
            />
          ),
          value: ct,
        }))].map(ct => (
          <button
            key={ct.value}
            onClick={() =>
              onChange("combatType", filters.combatType === ct.value ? "Combat Type" : ct.value)
            }
            className={`px-3 py-1 text-sm font-medium transition-colors ${
              filters.combatType === ct.value
                ? "bg-sky-500 text-black"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {ct.label}
          </button>
        ))}
      </div>

      {/* feature type */}
      <select
        value={filters.featureType}
        onChange={e => onChange("featureType", e.target.value)}
        className="bg-gray-800 text-white rounded border border-gray-600 px-2 py-1 h-[38px]"
      >
        <option>Feature Type</option>
        {TREKKER_OPTIONS.featureTypes.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      {/* faction */}
      <select
        value={filters.faction}
        onChange={e => onChange("faction", e.target.value)}
        className="bg-gray-800 text-white rounded border border-gray-600 px-2 py-1 h-[38px]"
      >
        <option>Any Faction</option>
        {TREKKER_OPTIONS.factions.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      {/* style */}
      <select
        value={filters.style}
        onChange={e => onChange("style", e.target.value)}
        className="bg-gray-800 text-white rounded border border-gray-600 px-2 py-1 h-[38px]"
      >
        <option>Style</option>
        {TREKKER_OPTIONS.styles.map(opt => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <button
        onClick={onReset}
        title="Reset filters"
        className="ml-auto text-gray-300 border border-gray-600 p-2 rounded hover:bg-gray-700 flex items-center justify-center"
      >
        <RotateCcw size={16} />
      </button>
    </div>
  );
}
