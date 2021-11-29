export interface ICharacter {
  meta: IMeta,
  basic: IBasic,
  derived: IDerivedStat,
  assigned: IAssignedStat,
  development: IDevelopment,
  story: IBackStory,
  weapons: IWeapons,
  possession: IPossession,
  fellow: Array<IInvestigator>,
  note: INote,
}

// # ANCHOR meta

export interface IMeta {
  age: string,
  version: string,
  setting?: string,
  campaign?: string,
  player?: string,
  is_npc?: boolean,
}

// # ANCHOR basic

export interface IBasic extends IBasicStat {
  occupation: IOccupation,
  bonus: Array<IBonus>,
  age_modify: {
    characteristic: string,
    luck_bonus: boolean,
  },
}

export interface IBonus {
  name: string,
  skill_point?: number,
  applied_skills?: string[],
  cthulhu_mythos?: number | IDice,
  san_modified?: number | IDice,
  annotaion?: string,
}

export interface IOccupation {
  name: string,
  occupation_skill_point: Array<
    Array<{
      characteristic: string,
      muitipler: number,
    }>
  >,
  occupation_skills: string[],
}

export interface IBasicStat {
  characteristic: ICharacteristic,
  skills: ISkills,
}

export interface ICharacteristic {
  str: number,
  dex: number,
  con: number,
  siz: number,
  app: number,
  pow: number,
  int: number,
  edu: number,
}

export interface ISkills extends Array<ISkill> { }

export interface ISkill {
  key: string,
  is_empty: boolean,
  display: string,
  full_display: string,
  basic: {
    score: number | null,
    compute?: {
      relative: IStatQuery | Array<IStatQuery>,
      operation?(...n: number[] | number): number,
    },
  },
  collective?: boolean,
  belongs_to?: string,
}

// # ANCHOR assigned

export interface IAssignedStat extends IBasicStat { }

// # ANCHOR development

export interface IDevelopment extends IBasicStat {
  age: number,
}

// # ANCHOR derived

export interface IDerivedStat {
  hp: number,
  mp: number,
  pulp_hp?: boolean,
  san: number,
  mov: number,
  build: number,
  db: IDice | number,
  luck: string,
  current: {
    hp: number,
    mp: number,
    san: number,
    luck: number,
    mov_plus?: boolean,
    mov_minus?: boolean,
    major_wound?: boolean,
    temp_insane?: boolean,
    indef_insane?: boolean,
  },
}

// # ANCHOR back story

export interface IBackStory {
  name: string,
  sex: string,
  residence: string,
  birth_place: string,
  photo_url: string,
  persional_description?: Array<IStoryItem>,
  ideology_or_beliefs?: Array<IStoryItem>,
  significant_people?: Array<IStoryItem>,
  meaningful_location?: Array<IStoryItem>,
  treasured_possesions?: Array<IStoryItem>,
  trails?: Array<IStoryItem>,
  injuries_and_scars?: Array<IStoryItem>,
  phobias_and_manias?: Array<IStoryItem>,
  arcane_tomes_spells_and_artifacts?: Array<IStoryItem>,
  encounters_with_strange_entities?: Array<IStoryItem>,
}

export interface IStoryItem {
  title: string,
  is_common: boolean,
  san_modify?: number,
  key_connection: boolean,
  description?: string,
  source_or_cause?: string,
  by_kp?: boolean,
}

// # weapon

export interface IWeapons extends IWeapon { }

export interface IWeapon {
  name: string,
  skill: string,
  damage: {
    dice: IDice | number,
    db: boolean
  },
  range: string,
  attacks: number,
  ammo?: number,
  malfunction?: string,
  annotation?: string,
  possession?: string,
}

// # ANCHOR possession

export interface IPossession {
  gear_and_possesions: Array<IItem>,
  cash_and_assets: {
    spending_level: IMoney,
    cash: IMoney,
    assets: IMoney,
  }
}

export interface IItem {
  key: string,
  name: string,
  description?: string,
  price?: IMoney,
}

export interface IMoney {
  num: number,
  symbol: string,
  display: string,
  currency?: string,
}

export interface IInvestigator {
  occupation: string,
  name: string,
  age?: string | number,
  player: string,
}

export interface INote {
  key: string,
  time?: string,
  title?: string,
  category?: string,
  content?: string,
  annotation?: string,
}

// # ANCHOR common

export interface IDice {
  key: string,
  display: string,
  num: number,
  side: number,
  modify?(...n: number[]): number,
}