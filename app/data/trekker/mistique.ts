import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "mistique",
  name: "Mistique",
  rarity: RarityEnum.Five,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Scarlet Sights Media"],
  style: StyleEnum.Creative
} satisfies ExtendedTrekkerInterface;
