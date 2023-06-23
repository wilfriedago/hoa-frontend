export interface Campaign {
  id: string;
}

export interface CreateCampaignDto extends Omit<Campaign, 'id'> {}

export interface UpdateCampaignDto extends Partial<Campaign> {}

export interface ReplaceCampaignDto extends Campaign {}
