import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "nazuna",
  name: "Nazuna",
  rarity: RarityEnum.Five,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Petal Bloom Guild"],
  style: StyleEnum.Collector
} satisfies ExtendedTrekkerInterface;
