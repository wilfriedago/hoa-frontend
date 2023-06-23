export interface BloodGroup {
  id: string;
}

export interface CreateBloodGroupDto extends Omit<BloodGroup, 'id'> {}

export interface UpdateBloodGroupDto extends Partial<BloodGroup> {}

export interface ReplaceBloodGroupDto extends BloodGroup {}
