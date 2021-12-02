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
  setting?: string,
  version: string,
  campaign?: string,
  player?: string,
  is_npc?: boolean | null,
}

// # ANCHOR basic

export interface IBasic extends IBasicStat {
  skills: ISkills | null,
  version: string | null,
  variant: string | null | false,
  creaditTable: ICreaditTable | null,
  talent: null,
  occupations: IOccupations | null,
  bonus: IBonus | null,
  age_modify: {
    characteristic: string | null,
    luck_bonus: boolean,
  },
}

export interface ICreaditTable extends Array<ICreaditRow> { }

export interface ICreaditRow {
  range: [number, number],
  currency: string,
  spending_level: {
    value?: [IMoney, IMoney] | IMoney,
    description?: string,
  },
  cash: {
    value?: [IMoney, IMoney] | IMoney,
    description?: string,
  },
  assets: {
    value?: [IMoney, IMoney] | IMoney,
    description?: string,
  },
}

export interface IBonus {
  [key: string]: {
    skill_point?: number,
    applied_skills?: string[],
    cthulhu_mythos?: number | IDice,
    san_modified?: number | IDice,
    annotaion?: string,
  }
}

export interface IOccupations {
  [key: string]: IOccupation
}

export interface IOccupation {
  name: string,
  occupation_skill_point?: Array<
    Array<{
      characteristic: string,
      muitipler: number,
    }>
  >,
  occupation_skills?: string[],
}

export interface IBasicStat {
  characteristic: ICharacteristic,
}

export interface ICharacteristic {
  str: number | null,
  dex: number | null,
  con: number | null,
  siz: number | null,
  app: number | null,
  pow: number | null,
  int: number | null,
  edu: number | null,
}

export type SCharacteristics = 'str' | 'dex' | 'con' | 'siz' | 'app' | 'pow' | 'int' | 'edu'

export interface ISkills {
  [key: string]: ISkill | IBundleSkill,
}

export interface ISkill {
  is_empty: boolean,
  display: string,
  special?: boolean,
  collective?: boolean,
  rare?: boolean,
  basic: {
    score: number | null,
    compute?: {
      relative: IStatQuery | Array<IStatQuery>,
      operation?(...n: number[] | number): number,
    },
  },
}

export interface IBundleSkill {
  is_empty: boolean,
  display: string,
  special?: boolean,
  collective?: boolean,
  rare?: boolean,
  basic: {
    score: number | null,
    compute?: {
      relative: IStatQuery | Array<IStatQuery>,
      operation?(...n: number[] | number): number,
    },
  },
  belongs_to: string,
}

// # ANCHOR assigned

export interface IAssignedStat extends IBasicStat {
  assigned_skills: IAssignedSkills | null,
  skill_points: {
    used: number | null,
    occupation: number | null,
    interesting: number | null,
    bonus: {
      [bonus_key: string]: {
        value: number,
      }
    } | null,
  },
  occupation: string | null,
  age: number | null,
}

export interface IAssignedSkills {
  [skill_key: string]: IAssignedSkill | IAssignedBonusSkill,
}

export interface IAssignedSkill {
  value: number,
  asigned_value: number,
}

export interface IAssignedBonusSkill {
  value: number,
  asigned_value: number,
  belongs_to: string,
}

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