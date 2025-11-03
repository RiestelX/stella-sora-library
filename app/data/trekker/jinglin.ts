import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "jinglin",
  name: "Jinglin",
  rarity: RarityEnum.Four,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Fenghuang Diner"],
  style: StyleEnum.Inquisitive,

  profile: `Jinglin can summon lightning and fill the area around her with golden strikes. Though there is no consensus on the origin of this power, Jinglin herself believes that it was granted to her by the Divine Tree in Cang Wu city.`,

  stats: {
    hp: 44695,
    atk: 6437,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.FightingGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
