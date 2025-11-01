import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "amber",
  name: "Amber",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerDetail;
