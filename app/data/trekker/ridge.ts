import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "ridge",
  name: "Ridge",
  rarity: RarityEnum.Four,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["United Harvest"],
  style: StyleEnum.Collector,

  profile: `Ridge is a United Harvest Forester with a habit of stockpiling food. She has a shovel that can fire energy blasts, and she fights alongside the seed plants she scatters on the field.`,

  stats: {
    hp: 72867,
    atk: 6699,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
