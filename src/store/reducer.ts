import {createReducer} from '@reduxjs/toolkit';
import {OfferTypes} from '../types/offer';
import {changeLocation, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus} from './action';
import {CITIES, CityName} from '../const/city';
import { AuthorizationStatus } from '../const/const';

type InitialStateType = {
  city: CityName;
  offers: OfferTypes[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialStateType = {
  city: CITIES[0].name,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
