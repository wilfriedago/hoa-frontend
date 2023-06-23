import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiConfig } from '@/config';
import { StoreKeys } from '@/constants';
import type { RootState } from '@/store';
import type { ApiResult } from '@/utils/types';

import type { Campaign, CreateCampaignDto, ReplaceCampaignDto, UpdateCampaignDto } from './campaigns.types';

export const campaignsApi = createApi({
  reducerPath: StoreKeys.CAMPAIGNS,
  tagTypes: [StoreKeys.CAMPAIGNS],
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
    getCampaigns: build.query<ApiResult<Campaign>, void>({
      query: () => '/campaigns',
      providesTags: [{ type: StoreKeys.CAMPAIGNS, id: 'LIST' }]
    }),
    addCampaign: build.mutation<Campaign, CreateCampaignDto>({
      query: campaign => ({
        url: '/campaigns',
        method: 'POST',
        body: campaign
      }),
      invalidatesTags: [{ type: StoreKeys.CAMPAIGNS, id: 'LIST' }]
    }),
    getCampaign: build.query<Campaign, string>({
      query: id => `/campaigns/${id}`,
      providesTags: result => [{ type: StoreKeys.CAMPAIGNS, id: result?.id }]
    }),
    replaceCampaign: build.mutation<Campaign, ReplaceCampaignDto>({
      query: campaign => ({
        url: `/campaigns/${campaign.id}`,
        method: 'PUT',
        body: campaign
      }),
      invalidatesTags: result => [{ type: StoreKeys.CAMPAIGNS, id: result?.id }]
    }),
    updateCampaign: build.mutation<Campaign, UpdateCampaignDto>({
      query: campaign => ({
        url: `/campaigns/${campaign.id}`,
        method: 'PATCH',
        body: campaign
      }),
      invalidatesTags: result => [{ type: StoreKeys.CAMPAIGNS, id: result?.id }]
    }),
    deleteCampaign: build.mutation<Campaign, string>({
      query: id => ({
        url: `/campaigns/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: result => [{ type: StoreKeys.CAMPAIGNS, id: result?.id }]
    })
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true
});

export const {
  useGetCampaignsQuery,
  useAddCampaignMutation,
  useGetCampaignQuery,
  useReplaceCampaignMutation,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation
} = campaignsApi;
