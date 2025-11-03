import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "shia",
  name: "Shia",
  rarity: RarityEnum.Five,
  element: ElementEnum.Lux,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Adventurous,

  profile: `Shia is the definition of agility. Riding her surfboard alongside Snow Rabbit and Night Rabbit, she unleashes a tidal onslaught that crashes through everything in its path.`,

  stats: {
    hp: 43962,
    atk: 6333,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;