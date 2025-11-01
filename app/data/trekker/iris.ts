import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "iris",
  name: "Iris",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Creative
} satisfies ExtendedTrekkerDetail;
