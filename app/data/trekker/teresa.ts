import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "teresa",
  name: "Teresa",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Post Haste"],
  style: StyleEnum.Steady,

  profile: `Teresa has extensive experience in wilderness exploration and understands the importance of conserving stamina.`,

  stats: {
    hp: 74091,
    atk: 5495,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
