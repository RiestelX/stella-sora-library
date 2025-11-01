import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "coronis",
  name: "Coronis",
  rarity: RarityEnum.Four,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Fenghuang Diner"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
