import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import {
  IFellows,
  IFellow,
} from '../interfaces'

const initialState: IFellows = []

const fellowsSlice = createSlice({
  name: 'fellows',
  initialState,
  reducers: {
    updateFellow: (
      state,
      action: PayloadAction<{
        key: number,
        fellow: IFellow,
      }>
    ) => {
      const { key, fellow } = action.payload
      state[key] = Object.assign(state[key], fellow)
    },
  },
})

export const { updateFellow } = fellowsSlice.actions

export const selectFellows = (state: RootState) => state.fellows

export default fellowsSlice.reducer