import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "iris",
  name: "Iris",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Creative
} satisfies ExtendedTrekkerInterface;
