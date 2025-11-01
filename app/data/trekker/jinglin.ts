import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "jinglin",
  name: "Jinglin",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Fenghuang Diner"],
  style: StyleEnum.Inquisitive
} satisfies ExtendedTrekkerInterface;
