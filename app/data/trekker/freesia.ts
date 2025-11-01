import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "freesia",
  name: "Freesia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Post Haste"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
