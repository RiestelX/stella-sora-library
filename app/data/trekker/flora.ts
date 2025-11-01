import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "flora",
  name: "Flora",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerInterface;
