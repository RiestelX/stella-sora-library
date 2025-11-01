import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "nanoha",
  name: "Nanoha",
  rarity: RarityEnum.Five,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Goodwind Homecare"],
  style: StyleEnum.Inquisitive
} satisfies ExtendedTrekkerDetail;
