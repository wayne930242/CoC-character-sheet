import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import {
  IBasic,
} from '../interfaces'
import { RootState } from '../store'

const initialState: IBasic = {
  version: null,
  variant: false,
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
  skills: null,
  occupations: null,
  bonus: null,
  creaditTable: null,
  talent: null,
  age_modify: {
    characteristic: null,
    luck_bonus: false,
  },
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

export const { } = basicSlice.actions

export const selectBasic = (state: RootState) => state.basic

export default basicSlice.reducer