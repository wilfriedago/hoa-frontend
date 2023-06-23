import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiConfig } from '@/config';
import { StoreKeys } from '@/constants';
import type { RootState } from '@/store';
import type { ApiResult } from '@/utils/types';

import type { BloodGroup } from './blood-groups.types';

export const bloodGroupsApi = createApi({
  reducerPath: StoreKeys.BLOOD_GROUPS,
  tagTypes: [StoreKeys.BLOOD_GROUPS],
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.core.baseUrl,
    prepareHeaders(headers, { getState }) {
      const { accessToken, claims, scopes } = (getState() as RootState).auth;
      if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
      if (claims) headers.set('user', JSON.stringify({ claims, scopes }));
      return headers;
    }
  }),
  endpoints: build => ({
    getBloodGroups: build.query<ApiResult<BloodGroup>, void>({
      query: () => '/blood-groups',
      providesTags: [{ type: StoreKeys.BLOOD_GROUPS, id: 'LIST' }]
    }),
    getBloodGroup: build.query<BloodGroup, string>({
      query: id => `/blood-groups/${id}`,
      providesTags: result => [{ type: StoreKeys.BLOOD_GROUPS, id: result?.id }]
    })
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true
});

export const { useGetBloodGroupQuery, useGetBloodGroupsQuery } = bloodGroupsApi;
