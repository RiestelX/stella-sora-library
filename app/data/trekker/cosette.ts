import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum } from "../trekkerInterface";

export default {
  id: "cosette",
  name: "Cosette",
  rarity: RarityEnum.Four,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Inquisitive
} satisfies ExtendedTrekkerInterface;
