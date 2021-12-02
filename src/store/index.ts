import { configureStore } from '@reduxjs/toolkit'
import metaReducer from '../slices/meta'
import basicReducer from '../slices/meta'
import assignedReducer from '../slices/assigned'

const store = configureStore({
  reducer: {
    meta: metaReducer,
    basic: basicReducer,
    assigned: assignedReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store