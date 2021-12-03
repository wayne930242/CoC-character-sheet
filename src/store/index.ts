import { configureStore } from '@reduxjs/toolkit'
import metaReducer from '../slices/meta'
import basicReducer from '../slices/meta'
import assignedReducer from '../slices/assigned'
import backStoryReducer from '../slices/backStory'
import derivedReducer from '../slices/derived'
import weaponsReducer from '../slices/weapons'
import possesionReducer from '../slices/possession'
import fellowsReducer from '../slices/fellows'
import appInfoReducer from '../slices/appInfo'

const store = configureStore({
  reducer: {
    appInfo: appInfoReducer,
    meta: metaReducer,
    basic: basicReducer,
    derived: derivedReducer,
    assigned: assignedReducer,
    backStory: backStoryReducer,
    weapons: weaponsReducer,
    possession: possesionReducer,
    fellows: fellowsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store