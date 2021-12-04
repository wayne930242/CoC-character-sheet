export interface ICharacter {
  appInfo: IAppInfo,
  meta: IMeta,
  basic: IBasic,
  derived: IDerivedStat,
  assigned: IAssignedStat,
  story: IBackStory,
  weapons: IWeapons,
  possession: IPossession,
  fellows: IFellows,
  note: string | INote,
}

// # ANCHOR IAppInfo

export interface IAppInfo {
  display: 'zhTW' | 'hung' | 'en'
}

// # ANCHOR meta

export interface IMeta {
  setting?: string,
  version: string,
  campaign?: string,
  player?: string,
}

// # ANCHOR basic

export interface IBasic {
  skills: ISkills | null,
  version: string | null,
  creaditTable: ICreaditTable | null,
  talent?: null,
  occupations: IOccupations | null,
  bonus: IBonus | null,
  backStoryTitle: string[],
}

export interface ICreaditTable extends Array<ICreaditRow> { }

export interface ICreaditRow {
  range: number[],
  level: string,
  currency: string,
  symbol: string,
  spending_level: {
    value?: number,
    multipler?: number,
    description?: string,
  },
  cash: {
    value?: number,
    multipler?: number,
    description?: string,
  },
  assets: {
    value?: number,
    multipler?: number,
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
  [key: string]: ISkill | ISubSkill | ICollectiveSkill,
}

export interface ISkill {
  special?: boolean,
  rare?: boolean,
  mythos?: boolean,
  score?: number | string,
}

export interface ISubSkill {
  sub: true,
  special?: boolean,
  rare?: boolean,
  score?: number | string,
  mythos?: boolean,
  belongs_to: string,
}

export interface ICollectiveSkill {
  collective: true,
  score?: boolean,
  special?: boolean,
  rare?: boolean,
}

// # ANCHOR assigned

export interface IAssignedStat extends IBasicStat {
  assigned_skills: IAssignedSkills | null,
  developed_skills: IDevelopedSkills | null,
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
  [skill_key: string]: IAssignedSkill | IAssignedSubSkill,
}

export interface IAssignedSkill {
  value: number,
  asigned_value: number,
}

export interface IAssignedSubSkill {
  value: number,
  asigned_value: number,
  belongs_to: string,
}

export interface IDevelopedSkills {
  [skill_key: string]: IDevelopedSkill | IDevelopedSubSkill,
}

export interface IDevelopedSkill {
  value: number,
}

export interface IDevelopedSubSkill {
  value: number,
  belongs_to: string,
}

// # ANCHOR derived

export interface IDerivedStat {
  hp: number | null,
  mp: number | null,
  pulp_hp?: boolean | null,
  san: number | null,
  mov: number | null,
  build: number | null,
  db: IDice | number | null,
  luck: string | null,
  current: {
    hp: number | null,
    mp: number | null,
    san: number | null,
    luck: number | null,
    mov_plus?: boolean | null,
    mov_minus?: boolean | null,
    major_wound?: boolean | null,
    temp_insane?: boolean | null,
    indef_insane?: boolean | null,
  },
}

// # ANCHOR back story

export interface IBackStory {
  name: string | null,
  sex: string | null,
  residence: string | null,
  birth_place: string | null,
  photo_url: string | null,
  bio: string | null,
  backStory: IStoryItems | null,
}

export interface IStoryItems {
  [storyTitle: string]: string,
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

// # ANCHOR weapon

export interface IWeapons extends Array<IWeapon> { }

export interface IWeapon {
  name: string,
  skill: string,
  damage: {
    dice: IDice | number,
    db?: 'full' | 'half' | null,
  },
  range: string,
  attacks: number,
  pierce?: boolean,
  ammo?: number,
  malfunction?: string,
  annotation?: string,
  possession?: string,
}

// # ANCHOR possession

export interface IPossession {
  gear_and_possesions: Array<IItem>,
  cash_and_assets: {
    spending_level: number | null,
    cash: number | null,
    assets: number | null,
    assets_items: Array<IItem>,
  }
}

export interface IItem {
  key: string,
  name: string,
  description?: string,
  price?: number,
}

// # ANCHOR fellow

export interface IFellows extends Array<IFellow> { }

export interface IFellow {
  occupation: string,
  name: string,
  age?: string | number,
  player: string,
}

// # ANCHOR note

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