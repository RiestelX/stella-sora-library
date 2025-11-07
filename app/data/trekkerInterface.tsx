export const TREKKER_OPTIONS = {
  rarities: [4, 5] as const,

  elements: ["Aqua", "Ignis", "Terra", "Ventus", "Lux", "Umbra"] as const,

  combatTypes: ["Melee", "Ranged"] as const,

  featureTypes: ["Vanguard", "Versatile", "Support"] as const,

  factions: [
    "Yunji Studio",
    "Neo Grace Organization",
    "Scarlet Sights Media",
    "Grace Imperium",
    "New Star Guild",
    "Petal Bloom Guild",
    "Imperial Guard",
    "Ashwind Clan",
    "Post Haste",
    "Baize Bureau",
    "United Harvest",
    "Freelance Trekker",
    "Trekker Association",
    "Goodwind Homecare",
    "Fenghuang Diner",
    "White Cat Troupe",
  ] as const,

  styles: ["Adventurous", "Creative", "Steady", "Collector", "Inquisitive"] as const,
} as const;

export const RarityEnum = {
  Four: 4,
  Five: 5,
} as const;

export const ElementEnum = Object.fromEntries(TREKKER_OPTIONS.elements.map(e => [e, e])) as { [K in Element]: K };
export const CombatTypeEnum = Object.fromEntries(TREKKER_OPTIONS.combatTypes.map(c => [c, c])) as { [K in CombatType]: K };
export const FeatureTypeEnum = Object.fromEntries(TREKKER_OPTIONS.featureTypes.map(f => [f, f])) as { [K in FeatureType]: K };
export const FactionEnum = Object.fromEntries(TREKKER_OPTIONS.factions.map(f => [f, f])) as { [K in Faction]: K };
export const StyleEnum = Object.fromEntries(TREKKER_OPTIONS.styles.map(s => [s, s])) as { [K in Style]: K };

export const TrekkerTierUpMaterialEnum = {
  GrotesqueDancer: {
    Basic: "basic_backstage_ragged_hat.png",
    Intermediate: "intermediate_spotlight_bowler.png",
    Advanced: "advanced_exeunt_bowler.png",
  },
  EvernightEmberflies: {
    Basic: "basic_faint_wick.png",
    Intermediate: "intermediate_lumen_essence.png",
    Advanced: "advanced_eternal_gloom_core.png",
  },
  CountOfTheDuloos: {
    Basic: "basic_counts_rewards.png",
    Intermediate: "intermediate_counts_cellaring.png",
    Advanced: "advanced_counts_gift.png",
  },
} as const;

export const TrekkerSkillMaterialEnum = {
  RhythmGameCartridge: {
    Basic: "basic_tapping_game_cartridge.png",
    Intermediate: "intermediate_rhythm_game_cartridge.png",
    Advanced: "advanced_magic_sound_game_cartridge.png",
  },
  ShooterGameCartridge: {
    Basic: "basic_shooter_game_cartridge.png",
    Intermediate: "intermediate_barrage_game_cartridge.png",
    Advanced: "advanced_demon_bee_game_cartridge.png",
  },
  FightingGameCartridge: {
    Basic: "basic_kung_fu_game_cartridge.png",
    Intermediate: "intermediate_fighting_game_cartridge.png",
    Advanced: "advanced_phantom_game_catridge.png",
  },
} as const;

export type Rarity = (typeof TREKKER_OPTIONS.rarities)[number];
export type Element = (typeof TREKKER_OPTIONS.elements)[number];
export type CombatType = (typeof TREKKER_OPTIONS.combatTypes)[number];
export type FeatureType = (typeof TREKKER_OPTIONS.featureTypes)[number];
export type Faction = (typeof TREKKER_OPTIONS.factions)[number];
export type Style = (typeof TREKKER_OPTIONS.styles)[number];

export interface PotentialNode {
  build1: [];
  build2: [];
  generic: [];
}

export interface TrekkerPotentials {
  main: PotentialNode;
  support: PotentialNode;
}

export interface TrekkerInterface {
  id: string;
  name: string;
  rarity: Rarity;
  element: Element;
  combatType: CombatType;
  featureType: FeatureType;
  faction: Faction;
  style: Style;
  icon?: string;
  potential?: TrekkerPotentials;
}

// extend

export interface SkillValue {
  format: string;
  value: number[];
}

export interface SkillStrike {
  template: string;
  value_1?: SkillValue;
  value_2?: SkillValue;
  value_3?: SkillValue;
}

export interface SkillDetail {
  id: string;
  name: string;
  cooldown?: number;
  energyCost?: number;
  detailsBrief: string;
  details: string;
  strikes?: SkillStrike[];
  value_1?: SkillValue;
  value_2?: SkillValue;
}

export interface TrekkerStats {
  hp: number;
  atk: number;
  def: number;
}

interface TalentInfo {
  title: string;
  desc: string;
  value?: string;
}

export interface TrekkerTalent {
  bonusPerLevel: Record<string, any>;
  [level: number]: TalentInfo;
}

export interface TrekkerArchive {
  basicInfo: Record<string, any>;
  reason: string;
  cvexcerpt: Record<string, { title: string; desc: string }>;
  peerComments: string;
  taFeedback: string;
  appendix: string;
}

export interface TrekkerMaterial {
  tierUpTrial: {
    Basic: string;
    Intermediate: string;
    Advanced: string;
  };
  skillTrial: {
    Basic: string;
    Intermediate: string;
    Advanced: string;
  }
}

export interface ExtendedTrekkerInterface extends TrekkerInterface {
  profile?: string;
  stats?: TrekkerStats;
  skills?: {
    attack: SkillDetail;
    main: SkillDetail;
    support: SkillDetail;
    ultimate: SkillDetail;
  };
  talent?: TrekkerTalent;
  upgradeMaterials?: TrekkerMaterial;
  archive?: TrekkerArchive;
}