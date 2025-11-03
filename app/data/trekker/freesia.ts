import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "freesia",
  name: "Freesia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Post Haste"],
  style: StyleEnum.Adventurous,

  profile: `The ancient "Frenzy" magic fuels Freesia to keep fighting until utter exhaustion. This is the dark side of the usually graceful girl—one that should be kept from others.`,

  stats: {
    hp: 84195,
    atk: 7369,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.FightingGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
