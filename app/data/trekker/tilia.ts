import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "tilia",
  name: "Tilia",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Imperial Guard"],
  style: StyleEnum.Steady
} satisfies ExtendedTrekkerDetail;
