import _ from 'lodash'
import {
  IBasic,
  ISkills,
  ICreaditTable,
  IOccupations,
  IBonus,
} from "../../interfaces"

const skills: ISkills = {
  accounting: {
    score: '5',
  },
  animal_handling: {
    score: 5,
    special: true,
  },
  anthropology: {
    score: 1,
  },
  appraise: {
    score: 5,
  },
  archaeology: {
    score: 1,
  },
  artillery: {
    score: 1,
    special: true,
  },
  charm: {
    score: 15,
  },
  climb: {
    score: 1,
  },
  credit_rating: {
    score: 0,
  },
  cthulhu_mythos: {
    score: 0,
    mythos: true,
  },
  demolitions: {
    score: 1,
    special: true,
  },
  disguise: {
    score: 5,
  },
  diving: {
    score: 1,
    special: true,
  },
  dodge: {
    score: 'dex/2',
  },
  drive_auto: {
    score: 20,
  },
  electrical_repair: {
    score: 10,
  },
  fast_talk: {
    score: 5,
  },
  first_aid: {
    score: 30,
  },
  history: {
    score: 5,
  },
  hypnosis: {
    score: 1,
    special: true,
  },
  intimidate: {
    score: 15,
  },
  jump: {
    score: 20,
  },
  law: {
    score: 5,
  },
  library_use: {
    score: 20,
  },
  listen: {
    score: 20,
  },
  locksmith: {
    score: 1,
  },
  mechanical_repair: {
    score: 10,
  },
  medicine: {
    score: 1,
  },
  natural_world: {
    score: 10,
  },
  navigate: {
    score: 10,
  },
  occult: {
    score: 5,
  },
  operate_heavy_machinery: {
    score: 1,
  },
  persuade: {
    score: 10,
  },
  psychoanalysis: {
    score: 1,
  },
  psychology: {
    score: 10,
  },
  read_lips: {
    score: 1,
    special: true,
  },
  ride: {
    score: 1,
    special: true,
  },
  sleight_of_hand: {
    score: 10,
  },
  spot_hidden: {
    score: 25,
  },
  stealth: {
    score: 20,
  },
  swim: {
    score: 20,
  },
  throw: {
    score: 20,
  },
  track: {
    score: 10,
  },
}

const subSkills: ISkills = {
  "art_and_craft/acting": {
    score: 5,
    sub: true,
    belongs_to: 'art_and_craft',
  },
  "art_and_craft/fine_art": {
    score: 5,
    sub: true,
    belongs_to: 'art_and_craft',
  },
  "art_and_craft/forgery": {
    score: 5,
    sub: true,
    belongs_to: 'art_and_craft',
  },

  "fighting/axe": {
    score: 15,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/bow": {
    score: 15,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/brawl": {
    score: 25,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/chainsaw": {
    score: 10,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/flail": {
    score: 10,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/garrote": {
    score: 15,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/spear": {
    score: 20,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/sword": {
    score: 20,
    sub: true,
    belongs_to: "fighting",
  },
  "fighting/whip": {
    score: 5,
    sub: true,
    belongs_to: "fighting",
  },

  "firearms/flamethrower": {
    score: 10,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/handgun": {
    score: 20,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/heavy_weapons": {
    score: 10,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/machine_gun": {
    score: 10,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/rifle": {
    score: 25,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/shotgun": {
    score: 25,
    sub: true,
    belongs_to: "firearms",
  },
  "firearms/submachine_gun": {
    score: 15,
    sub: true,
    belongs_to: "firearms",
  },

  "language/own": {
    score: 'edu',
    sub: true,
    belongs_to: 'language',
  },

  "science/astronomy": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/biology": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/botany": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/chemistry": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/cryptography": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/forensics": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/geology": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/mathematics": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/meteorology": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/pharmacy": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/photography": {
    score: 5,
    sub: true,
    belongs_to: 'science',
  },
  "science/physics": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
  "science/zoology": {
    score: 1,
    sub: true,
    belongs_to: 'science',
  },
}

const collectiveSkills: ISkills = {
  "art_and_craft/": {
    score: 5,
    collective: true,
  },
  "fighting/": {
    collective: true,
  },
  "firearms/": {
    collective: true,
  },
  "language/": {
    collective: true,
    score: 1,
  },
  "lore/": {
    collective: true,
    score: 1,
  },
  "pilot/": {
    collective: true,
    score: 1,
  },
  "science/": {
    collective: true,
    score: 1,
  },
  "survival/": {
    collective: true,
    score: 1,
  },
}

const creaditTable: ICreaditTable = [
  {
    range: [0],
    level: 'penniless',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 0.5,
    },
    cash: {
      value: 0,
    },
    assets: {
      value: 0.5,
    },
  },
  {
    range: _.range(1, 9),
    level: 'poor',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 2,
    },
    cash: {
      multipler: 1,
    },
    assets: {
      multipler: 10,
    },
  },
  {
    range: _.range(10, 49),
    level: 'average',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 10,
    },
    cash: {
      multipler: 2,
    },
    assets: {
      multipler: 50,
    },
  },
  {
    range: _.range(50, 89),
    level: 'wealthy',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 50,
    },
    cash: {
      multipler: 5,
    },
    assets: {
      multipler: 500,
    },
  },
  {
    range: _.range(90, 98),
    level: 'rich',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 250,
    },
    cash: {
      multipler: 20,
    },
    assets: {
      multipler: 2000,
    },
  },
  {
    range: [99],
    level: 'super_rich',
    currency: 'usd_1920s',
    symbol: '$',
    spending_level: {
      value: 5000,
    },
    cash: {
      value: 50000,
    },
    assets: {
      description: 'over_5M+',
    },
  },
]

// https://call-of-cthulhu-d100.obsidianportal.com/wiki_pages/occupation
const occupations: IOccupations = {

}

const bonus: IBonus = {

}

const classic: IBasic = {
  version: '1920s',
  skills: {
    ...skills,
    ...subSkills,
    ...collectiveSkills,
  },
  creaditTable,
  occupations,
  bonus,
  backStoryTitle: [

  ],
}

export default classic