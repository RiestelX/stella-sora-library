import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "laru",
  name: "Laru",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Grace Imperium"],
  style: StyleEnum.Adventurous
} satisfies ExtendedTrekkerInterface;
