import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { authReducer, LogtoApi } from '@/features/auth';
import { bloodGroupsApi } from '@/features/blood-groups';
import { campaignsApi } from '@/features/campaigns';
import { donorsReducer } from '@/features/donors';

const reducers = {
  [LogtoApi.reducerPath]: LogtoApi.reducer,
  [campaignsApi.reducerPath]: campaignsApi.reducer,
  [bloodGroupsApi.reducerPath]: bloodGroupsApi.reducer,
  auth: authReducer,
  donors: donorsReducer
  // Add your other reducers here
};

const middlewares = [LogtoApi.middleware, campaignsApi.middleware, bloodGroupsApi.middleware];

export const AppStore = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(AppStore.dispatch);

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
