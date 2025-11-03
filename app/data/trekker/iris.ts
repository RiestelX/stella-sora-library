import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "iris",
  name: "Iris",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Creative,

  profile: `Iris' notebook is filled with magical formulas. Little-trained in close combat, she prefers to use ice to wear down the enemy from a safe distance.`,

  stats: {
    hp: 43595,
    atk: 6333,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.FightingGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
