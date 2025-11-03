import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "shimiao",
  name: "Shimiao",
  rarity: RarityEnum.Four,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Baize Bureau"],
  style: StyleEnum.Inquisitive,

  profile: `In addition to offering long-term on-site support to her companions, Shimiao is also skilled at handling problems herself. Perhaps this is why she embodies the perfect secretary.`,

  stats: {
    hp: 78990,
    atk: 6542,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
