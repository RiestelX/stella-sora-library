import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "nazuna",
  name: "Nazuna",
  rarity: RarityEnum.Five,
  element: ElementEnum.Terra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Support,
  faction: FactionEnum["Petal Bloom Guild"],
  style: StyleEnum.Collector,

  profile: `Nazuna fights with her trusty hand crossbow and her puppet companions at her side. Her out-of-the-box ideas and uncanny luck always bring pleasant surprises to the squad.`,

  stats: {
    hp: 52791,
    atk: 6045,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
