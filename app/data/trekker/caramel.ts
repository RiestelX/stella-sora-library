import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "caramel",
  name: "Caramel",
  rarity: RarityEnum.Four,
  element: ElementEnum.Umbra,
  combatType: CombatTypeEnum.Ranged,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Creative,

  profile: `Enchanted by the music in the Monolith, the virtuoso bassist dazzles her audience with ease. Not even Stellaroids or monsters can withstand the shockwaves she creates.`,

  stats: {
    hp: 47992,
    atk: 6542,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.EvernightEmberflies,
    skillTrial: TrekkerSkillMaterialEnum.RhythmGameCartridge
  }
} satisfies ExtendedTrekkerInterface;
