import type { LogtoContext } from '@logto/next';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { StoreKeys } from '@/constants';

export const LogtoApi = createApi({
  reducerPath: StoreKeys.LOGTO,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/logto'
  }),
  endpoints: build => ({
    getSession: build.query<LogtoContext, void>({
      query: () => 'user'
    })
  })
});

export const { useGetSessionQuery } = LogtoApi;
