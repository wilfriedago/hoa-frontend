import { rest } from 'msw';

// import type { Campaign, CreateCampaignDto, ReplaceCampaignDto, UpdateCampaignDto } from './types';
import { apiConfig } from '@/config';

export const campaignHandlers = [
  rest.get(`${apiConfig.core.baseUrl}/campaigns`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          name: 'Campaign 1'
        }
      ])
    );
  })
];
