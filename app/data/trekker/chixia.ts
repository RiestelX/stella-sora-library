import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "chixia",
  name: "Chixia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Yunji Studio"],
  style: StyleEnum.Collector,

  profile: `Nobody would expect a Xuan Shi to be so timid. Her giant writing brush is a modified flamethrower and also her instrument in drawing powerful talismans.`,

  stats: {
    hp: 49164,
    atk: 7254,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.FightingGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
