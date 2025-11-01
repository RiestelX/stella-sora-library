import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "canace",
  name: "Canace",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Grace Imperium"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
