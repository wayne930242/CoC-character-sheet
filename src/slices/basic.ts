import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBasic } from '../interfaces'
import { RootState } from '../store'

const initialState: IBasic = {
  version: null,
  skills: null,
  occupations: null,
  bonus: null,
  creaditTable: null,
  backStoryTitle: [],
}

const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    updateBasic: (
      state,
      action: PayloadAction<IBasic>
    ) => { state = action.payload },
  },
})

export const { updateBasic } = basicSlice.actions

export const selectBasic = (state: RootState) => state.basic

export default basicSlice.reducer