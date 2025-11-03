import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "coronis",
  name: "Coronis",
  rarity: RarityEnum.Four,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Fenghuang Diner"],
  style: StyleEnum.Adventurous,

  profile: `A doctor obsessed with researching strange malady. She wields a scythe, dispenses deadly poisons, and moves through the battlefield with grace.`,

  stats: {
    hp: 73479,
    atk: 6437,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
