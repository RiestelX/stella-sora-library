import type { TrekkerDetail } from "~/data/trekkerDetail";

const featureColors: Record<string, string> = {
  Vanguard: "#E66696",
  Support: "#41CAAE",
  Versatile: "#7A83E3",
};

const rarityGradients: Record<number, string> = {
  4: "from-[#E6D283] to-white",
  5: "from-[#B89BFF] to-[#72D1FF]",
};

const elementIcons: Record<string, string> = {
  Aqua: "aqua",
  Ignis: "ignis",
  Terra: "terra",
  Ventus: "ventus",
  Lux: "lux",
  Umbra: "umbra",
};

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFD700"
      viewBox="0 0 24 24"
      className="w-4 h-4 drop-shadow-sm rotate-[10deg]"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.167L12 18.896l-7.336 3.868 1.402-8.167L.132 9.21l8.2-1.192z" />
    </svg>
  );
}

export default function TrekkerCard({ trekker }: { trekker: TrekkerDetail }) {
  const featureColor = featureColors[trekker.featureType] || "#888";
  const rarityGradient =
    rarityGradients[trekker.rarity] || "from-gray-300 to-gray-100";

  return (
    <div className="relative w-[160px] h-[220px] rounded-lg overflow-hidden hover:scale-[1.03] transition-transform">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${rarityGradient} pt-[8px] pb-[16px] rounded-lg`}
      >
        <div className="relative w-full h-full bg-sky-200 overflow-hidden">
          {/* trekker */}
          <img
            src={trekker.icon}
            alt={trekker.name}
            className="w-full h-full object-cover scale-105"
          />

          {/* feature type + combat type */}
          <div className="absolute top-1 right-1 flex items-center">
            <div
              className="flex items-center text-white text-xs font-bold px-2 py-[3px] rounded-l-md"
              style={{ backgroundColor: featureColor }}
            >
              {trekker.featureType}
            </div>
            <div
              className="flex items-center justify-center w-5 h-[22px] rounded-r-md"
              style={{ backgroundColor: "#2E4B84" }}
            >
              <img
                src={`/icons/combat/${trekker.combatType.toLowerCase()}.png`}
                alt={trekker.combatType}
                className="w-3.5 h-3.5"
              />
            </div>
          </div>

          {/* name */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-end items-end px-1 pb-[2px]">
            <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-gray-200/90 to-transparent pointer-events-none" />
            <span className="text-[#2E4B84] font-bold text-xl translate-y-[1px] relative z-10">
              {trekker.name}
            </span>
          </div>
        </div>
      </div>

      {/* element icon */}
      <div className="absolute -top-0.5 -left-0.5 z-20 drop-shadow-md">
        <img
          src={`/icons/element/Icon_common_${elementIcons[
            trekker.element
          ].toLowerCase()}.png`}
          alt={trekker.element}
          className="w-12 h-12"
        />
      </div>
    </div>
  );
}
