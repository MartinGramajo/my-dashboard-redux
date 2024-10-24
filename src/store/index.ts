import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})


// Toda esta parte del código es para el tipado estricto ya que estamos trabajando en Typescript

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch