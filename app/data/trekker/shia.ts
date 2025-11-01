import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "shia",
  name: "Shia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
