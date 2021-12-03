import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IMeta } from '../interfaces'

const initialState: IMeta = {
  version: '',
  setting: '',
  campaign: '',
  player: '',
}

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    updateMeta: (
      state,
      action: PayloadAction<{
        key: 'setting' | 'version' | 'campaign' | 'player',
        value: string,
      }>
    ) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export const { updateMeta } = metaSlice.actions

export const selectMeta = (state: RootState) => state.meta

export default metaSlice.reducer