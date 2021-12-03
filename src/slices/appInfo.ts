import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IAppInfo } from '../interfaces'

const initialState: IAppInfo = {
  display: 'en',
}

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    updateDisplay: (
      state,
      action: PayloadAction<any | string>
    ) => {
      state.display = action.payload
    },
  },
})

export const { updateDisplay } = appInfoSlice.actions

export const selectAppInfo = (state: RootState) => state.appInfo

export default appInfoSlice.reducer