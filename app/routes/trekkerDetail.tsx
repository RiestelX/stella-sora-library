import { StepBack, Heart, Sword, Shield } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { trekkers } from "~/data";
import type { ExtendedTrekkerInterface, SkillDetail } from "~/data/trekkerInterface";
import { featureColors, elementColots } from "~/components/trekkerCard";

export default function TrekkerDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const trekker = trekkers.find(t => String(t.id) === id) as ExtendedTrekkerInterface | undefined;

  if (!trekker) {
    return <div className="text-white text-center mt-10">Trekker not found.</div>;
  }

  const safeStats = trekker.stats ?? { levelCap: "-", hp: "-", atk: "-", def: "-" };
  const safeSkills = (trekker.skills ?? {}) as Record<string, SkillDetail>;
  const safeArchive = trekker.archive ?? {
    basicInfo: {},
    reason: "-",
    cvexcerpt: {},
  };

  type StarProps = {
    size?: number;
    className?: string;
  };

  const Star = ({ size = 36, className = "" }: StarProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] ${className}`}
    >
      <defs>
        <linearGradient id="starGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9C4" />   {/* top-left light */}
          <stop offset="40%" stopColor="#FFD84E" />  {/* center */}
          <stop offset="100%" stopColor="#B8860B" /> {/* bottom-right shadow */}
        </linearGradient>

        {/* inner glow */}
        <radialGradient id="starGlow" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* base and border */}
      <path
        d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"
        fill="url(#starGold)"
        stroke="#8B6508"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* top-left glow */}
      <path
        d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z"
        fill="url(#starGlow)"
        opacity="0.6"
      />
    </svg>
  );

  return (
    <div className="text-white container">
      <button
        onClick={() => navigate("/trekker")}
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
      >
        <StepBack className="w-4 h-4" />
        Back to List
      </button>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 flex-1">
          <img
            src={trekker.icon}
            alt={trekker.name}
            className="w-60 h-60 rounded-xl shadow-md border-2 border-gray-700 object-cover"
          />

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl font-bold tracking-wide">
                {trekker.name ?? "-"}
              </h1>
              <div className="flex items-center -space-x-4 [direction:rtl]">
                {Array.from({ length: trekker.rarity ?? 0 }).map((_, i) => (
                  <Star key={i} className="rotate-[10deg]" />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-gray-300 mb-4">
              <div className="relative inline-block">
                <img
                  src={`${import.meta.env.BASE_URL}icons/element/Icon_common_${(trekker.element).toLowerCase()}.png`}
                  alt={trekker.element ?? "-"}
                  className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1 w-16 h-16"
                />
                <span
                  className="block text-m font-bold text-white bg-white px-6 py-2 rounded-md pl-20"
                  style={{
                    color: elementColots[trekker.element] ?? "#FFFFFF",
                    borderColor: elementColots[trekker.element] ?? "#FFFFFF",
                  }}
                >
                  {trekker.element ?? "-"}
                </span>
              </div>

              <span
                className="font-semibold text-m text-white px-3 py-2 rounded-md"
                style={{
                  backgroundColor:
                    featureColors[trekker.featureType] ?? "#FFFFFF",
                }}
              >
                {trekker.featureType ?? "-"}
              </span>

              <span className="inline-flex items-center gap-2 text-m font-semibold text-white bg-[#2E4B84] px-3 py-2 rounded-md">
                <img
                  src={`${import.meta.env.BASE_URL}icons/combat/${(trekker.combatType).toLowerCase()}.png`}
                  alt={trekker.element ?? "Element"}
                  className="w-5 h-5"
                />
                {trekker.combatType ?? "-"}
              </span>

              <span className="font-semibold text-m text-[#2E4B84] bg-white px-3 py-2 rounded-md">
                {trekker.style ?? "-"}
              </span>
              <span className="font-semibold text-m text-[#2E4B84] bg-white px-3 py-2 rounded-md">
                {trekker.faction ?? "-"}
              </span>
            </div>

            <p className="text-gray-200 italic leading-relaxed max-w-2xl">
              {trekker.profile ?? "-"}
            </p>
          </div>
        </div>

        <section className="relative w-full lg:w-80">
          <div className="flex justify-between items-center bg-[#17c9d3] px-4 py-1">
            <h2 className="text-white font-bold text-lg">Stats (Trekker Level 90)</h2>
          </div>

          <div className="flex flex-col gap-2 py-3">
            <div className="relative flex items-center rounded-full border-2 border-[#0abdc3] bg-white pl-12 pr-4 py-1">
              <div className="absolute inset-y-0 left-0 w-10 bg-[#0abdc3] -skew-x-12 origin-left rounded-l-full flex items-center justify-center">
                <div className="skew-x-12">
                  <Heart color="#ffffff" />
                </div>
              </div>
              <span className="text-[#2E4B84] font-semibold">HP</span>
              <span className="ml-auto text-[#2E4B84] font-bold">{safeStats.hp}</span>
            </div>

            <div className="relative flex items-center rounded-full border-2 border-[#0abdc3] bg-white pl-12 pr-4 py-1">
              <div className="absolute inset-y-0 left-0 w-10 bg-[#0abdc3] -skew-x-12 origin-left rounded-l-full flex items-center justify-center">
                <div className="skew-x-12">
                  <Sword color="#ffffff" />
                </div>
              </div>
              <span className="text-[#2E4B84] font-semibold">ATK</span>
              <span className="ml-auto text-[#2E4B84] font-bold">{safeStats.atk}</span>
            </div>

            <div className="relative flex items-center rounded-full border-2 border-[#0abdc3] bg-white pl-12 pr-4 py-1">
              <div className="absolute inset-y-0 left-0 w-10 bg-[#0abdc3] -skew-x-12 origin-left rounded-l-full flex items-center justify-center">
                <div className="skew-x-12">
                  <Shield color="#ffffff" />
                </div>
              </div>
              <span className="text-[#2E4B84] font-semibold">DEF</span>
              <span className="ml-auto text-[#2E4B84] font-bold">{safeStats.def}</span>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 bg-gray-800/60 rounded-lg p-4 border border-gray-700">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {Object.entries(safeSkills).length > 0 ? (
            Object.entries(safeSkills).map(([key, skill]) => (
              <div
                key={key}
                className="bg-gray-900/40 p-4 rounded-md border border-gray-700 hover:border-sky-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{skill.name ?? "-"}</h3>
                {skill.cooldown && (
                  <p className="text-sm text-gray-400">Cooldown: {skill.cooldown}s</p>
                )}
                {skill.energyCost && (
                  <p className="text-sm text-gray-400">Energy: {skill.energyCost}</p>
                )}
                <p className="mt-2 text-sm text-gray-200">{skill.detailsBrief ?? "-"}</p>

                {skill.strikes && (
                  <ul className="mt-2 ml-3 list-disc text-sm text-gray-400">
                    {skill.strikes.map((s, i) => (
                      <li key={i}>
                        {s.template.replace(/{{([^}]+)}}/g, (_, key) => {
                          const val = s[key.trim() as keyof typeof s];
                          if (val && typeof val === "object" && "format" in val && "value" in val) {
                            return val.format.replace(
                              "{{value}}",
                              val.value?.[0]?.toString() ?? "-"
                            );
                          }
                          return "-";
                        })}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic">No skills data available.</p>
          )}
        </div>
      </section>

      <section className="mt-8 bg-gray-800/60 rounded-lg p-4 border border-gray-700">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-1">Archive</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
          <div>
            <h3 className="font-semibold text-white mb-2">Basic Info</h3>
            {Object.keys(safeArchive.basicInfo).length > 0 ? (
              <ul className="text-sm space-y-1">
                {Object.entries(safeArchive.basicInfo).map(([key, value]) => {
                  if (typeof value === "object") {
                    return (
                      <li key={key}>
                        <span className="capitalize">{key}:</span>{" "}
                        {value.voiceActor ? `${value.voiceActor} (${value.language})` : "-"}
                      </li>
                    );
                  }
                  return (
                    <li key={key}>
                      <span className="capitalize">{key}:</span> {String(value ?? "-")}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No basic info available.</p>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Reason</h3>
            <p className="text-sm italic">{safeArchive.reason ?? "-"}</p>

            <h3 className="font-semibold text-white mt-4 mb-2">Voice Excerpt</h3>
            {Object.keys(safeArchive.cvexcerpt).length > 0 ? (
              Object.values(safeArchive.cvexcerpt).map((entry: any, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-sm font-semibold text-sky-400">{entry.title ?? "-"}</p>
                  <p className="text-sm text-gray-300">{entry.desc ?? "-"}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">No voice excerpts available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
