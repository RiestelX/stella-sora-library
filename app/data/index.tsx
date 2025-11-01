import type { TrekkerDetail, TrekkerPotentials } from "./trekkerDetail";

const allModules = import.meta.glob("./trekker/*.{ts,json}", { eager: true });

const trekkerModules: Record<string, TrekkerDetail> = {};
const potentialModules: Record<string, TrekkerPotentials> = {};

for (const [path, mod] of Object.entries(allModules)) {
  const content = (mod as any).default ?? mod;

  if (path.includes("_potentials")) {
    potentialModules[path] = content as TrekkerPotentials;
  } else {
    trekkerModules[path] = content as TrekkerDetail;
  }
}

export const trekkers: TrekkerDetail[] = Object.entries(trekkerModules).map(([path, data]) => {
  const name = path.split("/").pop()?.replace(/\.(ts|json)$/, "") ?? "";
  const potentialKey = `./trekker/${name}_potentials.json`;
  const potential = potentialModules[potentialKey];

  return {
    ...data,
    icon: `/icons/trekker/icon_${data.id}.png`,
    potential,
  } satisfies TrekkerDetail;
});
