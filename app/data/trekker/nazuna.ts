import type { ExtendedTrekkerDetail } from "../trekkerDetail";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerDetail";

export default {
  id: "nazuna",
  name: "Nazuna",
  rarity: RarityEnum.Five,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Petal Bloom Guild"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerDetail;
