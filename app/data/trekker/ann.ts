import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "ann",
  name: "Ann",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
