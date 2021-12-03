import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPossession, IItem } from '../interfaces'
import { RootState } from '../store'

const initialState: IPossession = {
  gear_and_possesions: [],
  cash_and_assets: {
    spending_level: null,
    cash: null,
    assets: null,
    assets_items: [],
  }
}

const possesionSlice = createSlice({
  name: 'possesion',
  initialState,
  reducers: {
    updateItem: (
      state,
      action: PayloadAction<{
        key: number,
        item: IItem,
      }>
    ) => {
      const { key, item } = action.payload

      state.gear_and_possesions[key] = Object.assign(
        state.gear_and_possesions,
        item,
      )
    },

    updateCashAndAssets: (
      state,
      action: PayloadAction<{
        spending_level: number | null,
        cash: number | null,
        assets: number | null,
      }>
    ) => {
      const { spending_level, cash, assets } = action.payload
      state.cash_and_assets = {
        ...state.cash_and_assets,
        spending_level,
        cash,
        assets,
      }
    },

    updateAssetsItem: (
      state,
      action: PayloadAction<{
        key: number,
        item: IItem,
      }>
    ) => {
      const { key, item } = action.payload

      state.cash_and_assets.assets_items[key] = Object.assign(
        state.cash_and_assets.assets_items,
        item,
      )
    },
  },
})

export const {
  updateItem,
  updateCashAndAssets,
  updateAssetsItem,
} = possesionSlice.actions

export const selectPossesion = (state: RootState) => state.possession

export default possesionSlice.reducer