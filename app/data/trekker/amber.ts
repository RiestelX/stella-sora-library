import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "amber",
  name: "Amber",
  rarity: RarityEnum.Four,
  element: ElementEnum.Ignis,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["New Star Guild"],
  style: StyleEnum.Collector,

  profile: `The agile dual pistols allow Amber to sashay across the battlefield. Enemies who try to get close to her will turn into ashes long before they can reach her perimeter.`,

  stats: {
    hp: 45794,
    atk: 6490,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
