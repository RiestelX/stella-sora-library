import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "gerie",
  name: "Gerie",
  rarity: RarityEnum.Five,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Grace Imperium"],
  style: StyleEnum.Inquisitive,

  profile: `Gerie brandishes her chain- shovel "Mercy" with reckless abandon on the battlefield, crushing swathes of foes. She sows terror into her opponent's soul before delivering judgment.`,

  stats: {
    hp: 88236,
    atk: 7426,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.FightingGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
