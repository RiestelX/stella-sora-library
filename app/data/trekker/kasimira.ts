import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "kasimira",
  name: "Kasimira",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["White Cat Troupe"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
