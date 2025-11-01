import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "shia",
  name: "Shia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
