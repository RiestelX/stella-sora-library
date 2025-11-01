import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "teresa",
  name: "Teresa",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Post Haste"],
  style: StyleEnum.Steady
} satisfies ExtendedTrekkerInterface;
