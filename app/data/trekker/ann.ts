import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "ann",
  name: "Ann",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
