import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "kasimira",
  name: "Kasimira",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["White Cat Troupe"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
