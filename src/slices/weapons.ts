import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import {
  IWeapons,
  IWeapon,
} from '../interfaces'

const initialState: IWeapons = []

const weaponsSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    updateWeapon: (
      state,
      action: PayloadAction<{
        key: number,
        weapon: IWeapon,
      }>
    ) => {
      const { key, weapon } = action.payload
      state[key] = Object.assign(state[key], weapon)
    },
  },
})

export const { updateWeapon } = weaponsSlice.actions

export const selectWeapons = (state: RootState) => state.weapons

export default weaponsSlice.reducer