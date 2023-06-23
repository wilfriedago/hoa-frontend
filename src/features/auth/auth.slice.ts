import type { LogtoContext } from '@logto/next/*';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { StoreKeys } from '@/constants';
import type { RootState } from '@/store';

const authSlice = createSlice({
  name: StoreKeys.AUTH,
  initialState: {} as LogtoContext,
  reducers: {
    setUser: (_state, { payload }: PayloadAction<LogtoContext>) => {
      return payload;
    }
  }
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
