import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "ridge",
  name: "Ridge",
  rarity: RarityEnum.Four,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["United Harvest"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerInterface;
