import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { StoreKeys } from '@/constants';
import { type RootState } from '@/store';

import { type DonorsState } from './donors.types';

const initialState: DonorsState = {
  isELigible: true,
  questionnaire: {
    isTaken: false
  }
};

const donorsSlice = createSlice({
  name: StoreKeys.DONORS,
  initialState,
  reducers: {
    setEligibility: (state, { payload }: PayloadAction<boolean>) => {
      state.isELigible = payload;
    },
    resetEligibility: state => {
      state.isELigible = false;
    },
    setQuestionnaire: (state, { payload }: PayloadAction<DonorsState['questionnaire']>) => {
      state.questionnaire = payload;
    }
  }
});

export const { setEligibility, resetEligibility, setQuestionnaire } = donorsSlice.actions;

export const selectEligibility = (state: RootState) => state.donors.isELigible;

export const selectQuestionnaire = (state: RootState) => state.donors.questionnaire;

export const donorsReducer = donorsSlice.reducer;
