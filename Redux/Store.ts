import {configureStore} from '@reduxjs/toolkit';
import ActionSlice from './ActionSlice';
import {BaseAPI} from '../Api/Endpoint';
export const Store = configureStore({
  reducer: {
    actionslice: ActionSlice,
    [BaseAPI.reducerPath]: BaseAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(BaseAPI.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
