import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { LogtoApi } from '@/features/auth';

const store = configureStore({
  reducer: {
    [LogtoApi.reducerPath]: LogtoApi.reducer
    // Add your other reducers here
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(LogtoApi.middleware)
});

setupListeners(store.dispatch);

export default store;
