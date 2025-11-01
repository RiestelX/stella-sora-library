import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "canace",
  name: "Canace",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Grace Imperium"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
