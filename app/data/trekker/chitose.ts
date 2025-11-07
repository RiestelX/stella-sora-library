import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import { RarityEnum, ElementEnum, CombatTypeEnum, FeatureTypeEnum, FactionEnum, StyleEnum, TrekkerTierUpMaterialEnum, TrekkerSkillMaterialEnum } from "../trekkerInterface";

export default {
  id: "chitose",
  name: "Chitose",
  rarity: RarityEnum.Five,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Inquisitive,

  profile: `Chitose is a formidable warrior who sees herself as the blade, with a presence as sharp as steel. Her blade can summon flowing currents, shaping them into water serpents that crash through enemy lines.`,

  stats: {
    hp: 87563,
    atk: 7542,
    def: 190,
  },

  upgradeMaterials: {
    tierUpTrial: TrekkerTierUpMaterialEnum.GrotesqueDancer,
    skillTrial: TrekkerSkillMaterialEnum.ShooterGameCartridge
  },

  skills: {
    attack: {
      id: "aeroflow",
      name: "Aeroflow",
      detailsBrief: "Wields the odachi to deal DMG multiple times.",
      details: "Wields the odachi to deal DMG multiple times.",
      strikes: [
        {
          template: "Strike 1: {{value_1}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK x2",
            value: [25.6],
          },
        },
        {
          template: "Strike 2: {{value_1}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK",
            value: [37.2],
          },
        },
        {
          template: "Strike 3: {{value_1}} and {{value_2}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK",
            value: [31.4],
          },
          value_2: {
            format: "{{value}}% of ATK",
            value: [73],
          },
        },
        {
          template: "Strike 4: {{value_1}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK x2",
            value: [26.1],
          },
        },
        {
          template: "Strike 5: {{value_1}} and {{value_2}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK x2",
            value: [28.2],
          },
          value_2: {
            format: "{{value}}% of ATK",
            value: [56.4],
          },
        },
        {
          template: "Strike 6: {{value_1}} and {{value_2}} as Aqua DMG",
          value_1: {
            format: "{{value}}% of ATK",
            value: [160],
          },
          value_2: {
            format: "{{value}}% of ATK",
            value: [86],
          },
        },
      ],
    },
    main: {
      id: "torrent_flash",
      name: "Torrent Flash",
      cooldown: 8,
      detailsBrief:
        "Dashes forward, dealing AoE Aqua DMG. After every 2 casts, the next cast of the skill is enhanced. The Main Skill can trigger {{aqua_mark}}",
      details:
        "Dashes forward, dealing {{value_1}} as AoE Aqua DMG. It can be cast 2 times initially. After every 2 casts of Torrent Flash, the next Torrent Flash becomes Torrent Flash: Scale: Summons a Coiling Serpent, dealing {{value_2}} as AoE Aqua DMG. Torrent Flash (Main Skill) and Torrent Flash: Scale can trigger {{aqua_mark}}, dealing 104% of ATK as AoE Aqua Mark DMG and inflicting {{chill}}.",
      value_1: {
        format: "{{value}}% of ATK x2",
        value: [305],
      },
      value_2: {
        format: "{{value}}% of ATK x3",
        value: [356],
      },
    },
    support: {
      id: "water_surge",
      name: "Water Surge",
      cooldown: 12,
      detailsBrief: "",
      details: "",
    },
    ultimate: {
      id: "waves_of_naraka",
      name: "Waves of Naraka",
      cooldown: 30,
      energyCost: 285,
      detailsBrief: "",
      details: "",
    },
  },

  talent: {
    bonusPerLevel: {
      BaseATK: "+120",
      ATK: "+3%",
      BaseDEF: "+20",
      BaseHP: "+1380",
      AquaDMG: "+3%"
    },
    1: {
      title: `Tideweaver`,
      desc: `When Chitose casts her Ultimate, increases her ATK by {{value}} for 20s.`,
      value: `30%`
    },
    2: {
      title: `Blade in Sleeves`,
      desc: `Aqua DMG +{{value}} for 8s when Chitose triggers {{aqua_mark}}`,
      value: `20%`
    },
    3: {
      title: `Tideborn Shadow`,
      desc: `When Chitose deals DMG to a target with Mirror Images, increases her ATK by {{value}} for 8s, stacking up to 20 times.`,
      value: `1%`
    },
    4: {
      title: `Afterrain Clarity`,
      desc: `When Chitose triggers Aqua Mark increases her Ultimate DMG by {{value}}, stacking up to 10 times. This effect is removed after she casts her Ultimate.`,
      value: `2.2%`
    },
    5: {
      title: `Cloudstrider's Melody`,
      desc: `Increases Chitose's Aqua DMG dealt to elite or higher-tier targets by {{value}}.`,
      value: `24%`
    }
  },

  archive: {
    basicInfo: {
      birthday: "November 3rd",
      affiliation: "Freelance Trekker",
      skills: "Swordsmanship",
      address: "Amekiku Inn",
      experience: "Half a year",
      weapon: "Her Majesty the Blade",
      rate: "Food is sufficient. Rice preferred.",
      voiceover: {
        language: "Japanese",
        voiceActor: "Hika Tsukishiro",
      },
    },
    reason:
      "To become the sharpest blade in all of Nova with Boss as my Wielder",
    cvexcerpt: {
      1: {
        title: `The Basic Standard for a Wielder`,
        desc: `One who is not harmed by my aura of edge.`,
      },
      2: { 
        title: `Parents and Master`,
        desc: `The twin blades on my back are "Father and Mother," while the odachi is "Master." 
        My own strength is still lacking, and I have yet to truly become a worthy blade. Thus I must still rely on their power.`,
      },
      3: {
        title: `Amekiku`,
        desc: `A once-abandoned traveler's inn on the outskirts of the City of a Thousand Monoliths, later refurbished by Chitose into something resembling a dojo and given the name "Amekiku." 
        Chitose usually offers conveniences here to passing Trekkers, including but not limited to weather forecasts and tea service. 
        —From the words of Trekkers passing through`,
      },
      4: {
        title: `Amekiku`,
        desc: `A once-abandoned traveler's inn on the outskirts of the City of a Thousand Monoliths, later refurbished by Chitose into something resembling a dojo and given the name "Amekiku." 
        Chitose usually offers conveniences here to passing Trekkers, including but not limited to weather forecasts and tea service. 
        —From the words of Trekkers passing through`,
      },
    },
    peerComments: `-`,
    taFeedback: `-`,
    appendix: `-`
  },
} satisfies ExtendedTrekkerInterface;
