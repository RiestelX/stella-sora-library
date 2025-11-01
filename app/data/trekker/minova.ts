import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "minova",
  name: "Minova",
  rarity: RarityEnum.Five,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Ashwind Clan"],
  style: StyleEnum.Steady
} satisfies ExtendedTrekkerDetail;
