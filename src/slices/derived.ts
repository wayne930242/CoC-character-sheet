import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDerivedStat } from '../interfaces'
import { RootState } from '../store'

const initialState: IDerivedStat = {
  hp: null,
  mp: null,
  pulp_hp: null,
  san: null,
  mov: null,
  build: null,
  db: null,
  luck: null,
  current: {
    hp: null,
    mp: null,
    san: null,
    luck: null,
    mov_plus: null,
    mov_minus: null,
    major_wound: null,
    temp_insane: null,
    indef_insane: null,
  },
}

const derivedSlice = createSlice({
  name: 'derived',
  initialState,
  reducers: {
    updatedDerived: (
      state,
      action: PayloadAction<{
        key: string,
        value: any,
      }>
    ) => {
      const { key, value } = action.payload
      state = Object.assign(state, {
        [key]: value
      })
    },

    updatedCurrent: (
      state,
      action: PayloadAction<{
        key: string,
        value: any,
      }>
    ) => {
      const { key, value } = action.payload
      state.current = Object.assign(state.current, {
        [key]: value
      })
    }
  },
})

export const { updatedDerived, updatedCurrent } = derivedSlice.actions

export const selectDerived = (state: RootState) => state.derived

export default derivedSlice.reducer