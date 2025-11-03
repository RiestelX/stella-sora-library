import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "tilia",
  name: "Tilia",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Imperial Guard"],
  style: StyleEnum.Steady,

  profile: `Tilia will always be charging at the forefront, using her shield to protect everyone. Guess only another Imperial Knight might break through her defense.`,

  stats: {
    hp: 79602,
    atk: 5286,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
