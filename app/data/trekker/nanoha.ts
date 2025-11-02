import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "nanoha",
  name: "Nanoha",
  rarity: RarityEnum.Five,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Goodwind Homecare"],
  style: StyleEnum.Inquisitive,

  profile: 'Nanoha is a maid working at Goodwind who is also skilled in "Flower" Ninjutsu. She takes pride in her Sunflower Shuriken, which can hit its target while moving at high speed.',

  stats: {
    hp: 51179,
    atk: 7426,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
