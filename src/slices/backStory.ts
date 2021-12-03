import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import {
  IBackStory,
  IStoryItem,
} from '../interfaces'

const initialState: IBackStory = {
  name: null,
  sex: null,
  residence: null,
  birth_place: null,
  photo_url: null,
  bio: null,
  backStory: null,
}

const backStorySlice = createSlice({
  name: 'backStory',
  initialState,
  reducers: {
    updateBasicBack: (
      state,
      action: PayloadAction<{
        key: 'name' | 'sex' | 'residence' | 'birth_place' | 'photo_url',
        value: string,
      }>
    ) => {
      const { key, value } = action.payload
      state[key] = value
    },

    updateItem: (
      state,
      action: PayloadAction<{
        storyTitle: string,
        description: string,
      }>
    ) => {
      const { storyTitle, description } = action.payload

      state.backStory = Object.assign(state.backStory, {
        [storyTitle]: description,
      })
    },

  },
})

export const { updateBasicBack, updateItem } = backStorySlice.actions

export const selectBackStory = (state: RootState) => state.backStory

export default backStorySlice.reducer