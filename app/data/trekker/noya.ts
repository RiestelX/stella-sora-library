import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "noya",
  name: "Noya",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Creative
} satisfies ExtendedTrekkerDetail;
