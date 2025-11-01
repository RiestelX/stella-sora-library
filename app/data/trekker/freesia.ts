import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "freesia",
  name: "Freesia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Post Haste"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
