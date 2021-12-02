import { createSlice } from '@reduxjs/toolkit'
import { IMeta } from '../interfaces'
import { RootState } from '../store'
import _ from 'lodash'

const initialState: IMeta = {
  age: '',
  version: '',
  setting: '',
  campaign: '',
  player: '',
  is_npc: null,
}

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    update: (state, action) => {
      const { path, value } = action.payload 
      _.set(state, path, value)
    },
  },
})

export const { } = metaSlice.actions

export const selectMeta = (state: RootState) => state

export default metaSlice.reducer