import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "mistique",
  name: "Mistique",
  rarity: RarityEnum.Five,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Scarlet Sights Media"],
  style: StyleEnum.Creative
} satisfies ExtendedTrekkerDetail;
