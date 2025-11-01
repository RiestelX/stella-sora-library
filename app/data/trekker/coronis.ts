import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "coronis",
  name: "Coronis",
  rarity: RarityEnum.Four,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Fenghuang Diner"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerDetail;
