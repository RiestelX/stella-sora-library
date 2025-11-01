import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "chixia",
  name: "Chixia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Yunji Studio"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerInterface;
