import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import {
  IAssignedStat,
  SCharacteristics,
  ICharacteristic,
  IAssignedSkill,
  IAssignedBonusSkill,
} from '../interfaces'
import { computeTotalSkills } from '../lib/helpers/compute'
import { RootState } from '../store'

const initialState: IAssignedStat = {
  characteristic: {
    str: null,
    dex: null,
    con: null,
    siz: null,
    app: null,
    pow: null,
    int: null,
    edu: null,
  },
  assigned_skills: null,
  skill_points: {
    used: null,
    occupation: null,
    bonus: null,
    interesting: null,
  },
  occupation: null,
  age: null,
}

const assignedSlice = createSlice({
  name: 'assigned',
  initialState,
  reducers: {
    updateSingleCharacteristic: (
      state,
      action: PayloadAction<{
        key: SCharacteristics,
        value: number,
      }>
    ) => {
      const { key, value } = action.payload
      state.characteristic[key] = value
    },

    updateCharacteristics: (
      state,
      action: PayloadAction<ICharacteristic>
    ) => {
      return ({
        ...state,
        characteristic: {
          ...state.characteristic,
          ...action.payload,
        }
      })
    },

    updateSkill: (
      state,
      action: PayloadAction<{
        skill_key: string,
        skill: IAssignedSkill | IAssignedBonusSkill | null,
      }>
    ) => {
      const { skill_key, skill } = action.payload

      if (state.assigned_skills !== null) {
        if (
          skill !== null &&
          skill.asigned_value === 0
        ) {
          delete state.assigned_skills[skill_key]
        } else {
          state.assigned_skills = {
            ...state.assigned_skills,
            [skill_key]: {
              ...state.assigned_skills[skill_key],
              ...skill,
            }
          }
        }
      }

      const used = computeTotalSkills(state.assigned_skills)
      state.skill_points.used = used
    },

    updateSkillPoints: (
      state,
      action: PayloadAction<{
        type: 'occupation' | 'interesting',
        value: number | null,
      }>,
    ) => {
      const { type, value } = action.payload
      state.skill_points[type] = value
    },

    updateBonusSkillPoints: (
      state,
      action: PayloadAction<{
        bonus_key: string,
        value: number,
      }>,
    ) => {
      const { bonus_key, value } = action.payload
      if (state.skill_points.bonus !== null &&
        state.skill_points.bonus[bonus_key]) {
        state.skill_points.bonus[bonus_key].value = value
      }
    },

    deleteBonusSkill: (
      state,
      action: PayloadAction<string>
    ) => {
      if (state.skill_points.bonus !== null &&
        state.skill_points.bonus[action.payload]) {
        delete state.skill_points.bonus[action.payload]
      }
    },

    updatedOccupation: (
      state,
      action: PayloadAction<string | null>,
    ) => {
      state.occupation = action.payload
    },

    updatedAge: (
      state,
      action: PayloadAction<number | null>,
    ) => {
      state.age = action.payload
    },
  },
})

export const {
  updateSingleCharacteristic,
  updateCharacteristics,
  updateSkill,
  updateSkillPoints,
  updateBonusSkillPoints,
  deleteBonusSkill,
  updatedOccupation,
  updatedAge,
} = assignedSlice.actions

export const selectAssigned = (state: RootState) => state.assigned

export default assignedSlice.reducer