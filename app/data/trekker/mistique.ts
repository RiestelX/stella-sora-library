import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "mistique",
  name: "Mistique",
  rarity: RarityEnum.Five,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Versatile,
  faction: FactionEnum["Scarlet Sights Media"],
  style: StyleEnum.Creative,

  profile: `Mistique is the witch of Scarlet Sights Media. She has two summons that help her strike down her enemies in exchange for their "sustenance": Real news and truth.`,

  stats: {
    hp: 48761,
    atk: 7311,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.CountOfTheDuloos,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
