import type { LogtoContext } from '@logto/next';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { StoreKeys } from '@/constants';

export const LogtoApi = createApi({
  reducerPath: StoreKeys.LOGTO_API,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/logto'
  }),
  endpoints: build => ({
    getSession: build.query<LogtoContext, void>({
      query: () => 'user'
    })
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true
});

export const { useGetSessionQuery } = LogtoApi;
