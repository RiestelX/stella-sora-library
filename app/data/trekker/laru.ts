import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "laru",
  name: "Laru",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Grace Imperium"],
  style: StyleEnum.Adventurous,

  profile: `Cutting through her enemies with her spear of thunder, Laru is a flash darting across the battlefield. Here, her free spirit is out in full force.`,

  stats: {
    hp: 78990,
    atk: 6490,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
