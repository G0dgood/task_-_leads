import { configureStore } from '@reduxjs/toolkit'  
import authSlice from '../features/Auth/authSlice'   
import registrationSlice from '../features/Registration/registrationSlice'
import teamSlice from '../features/Team/teamSlice'
import taskSlice from '../features/Tasks/taskSlice'
 
 
  
export const store = configureStore({
  reducer: { 
    auth: authSlice, 
    reg: registrationSlice, 
    team: teamSlice, 
    task: taskSlice, 
 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch