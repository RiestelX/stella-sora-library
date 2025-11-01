import type { ExtendedTrekkerInterface } from "../trekkerInterface";
import {
  RarityEnum,
  ElementEnum,
  CombatTypeEnum,
  FeatureTypeEnum,
  FactionEnum,
  StyleEnum,
} from "../trekkerInterface";

export default {
  id: "chitose",
  name: "Chitose",
  rarity: RarityEnum.Five,
  element: ElementEnum.Aqua,
  combatType: CombatTypeEnum.Melee,
  featureType: FeatureTypeEnum.Vanguard,
  faction: FactionEnum["Freelance Trekker"],
  style: StyleEnum.Inquisitive,

  profile: "Chitose is a formidable warrior who sees herself as the blade, with a presence as sharp as steel. Her blade can summon flowing currents, shaping them into water serpents that crash through enemy lines.",

  stats: {
    levelCap: 90,
    hp: 87563,
    atk: 7542,
    def: 190,
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

  upgradeMaterials: {
    trial: "Grotesque Dancer",
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
      "To become the sharpest blade in all of Nova with Boss as my Wielder.",
    cvexcerpt: {
      1: {
        title: "The Basic Standard for a Wielder",
        desc: "One who is not harmed by my aura of edge.",
      },
    },
  },
} satisfies ExtendedTrekkerInterface;
