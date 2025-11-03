import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "noya",
  name: "Noya",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ventus,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Creative,

  profile: `Noya uses techniques no one has ever seen, learned from an unknown source. Even skill-casting does not interrupt her long sword's movements.`,

  stats: {
    hp: 79602,
    atk: 6542,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
