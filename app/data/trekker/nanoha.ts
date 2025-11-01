import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "nanoha",
  name: "Nanoha",
  rarity: RarityEnum.Five,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Goodwind Homecare"],
  style: StyleEnum.Inquisitive
} satisfies ExtendedTrekkerInterface;
