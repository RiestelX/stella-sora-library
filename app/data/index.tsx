import type { ExtendedTrekkerInterface, TrekkerPotentials } from "./trekkerInterface";

const allModules = import.meta.glob("./trekker/*.{ts,json}", { eager: true });

const trekkerModules: Record<string, ExtendedTrekkerInterface> = {};
const potentialModules: Record<string, TrekkerPotentials> = {};

for (const [path, mod] of Object.entries(allModules)) {
  const content = (mod as any).default ?? mod;

  if (path.includes("_potentials")) {
    potentialModules[path] = content as TrekkerPotentials;
  } else {
    trekkerModules[path] = content as ExtendedTrekkerInterface;
  }
}

export const trekkers: ExtendedTrekkerInterface[] = Object.entries(trekkerModules).map(([path, data]) => {
  const name = path.split("/").pop()?.replace(/\.(ts|json)$/, "") ?? "";
  const potentialKey = `./trekker/${name}_potentials.json`;
  const potential = potentialModules[potentialKey];

  return {
    ...data,
    icon: `${import.meta.env.BASE_URL}icons/trekker/icon_${data.id}.png`,
    potential,
  } satisfies ExtendedTrekkerInterface;
});
