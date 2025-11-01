import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "shimiao",
  name: "Shimiao",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Baize Bureau"],
  style: StyleEnum.Inquisitive
} satisfies ExtendedTrekkerInterface;
