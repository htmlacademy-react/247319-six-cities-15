import {createReducer} from '@reduxjs/toolkit';
import {OfferTypes} from '../types/offer';
import {
  changeLocation,
  loadNearPlaces,
  loadOffers,
  loadReviews,
  requireAuthorization,
  setActiveOffer,
  setError,
  setOffersDataLoadingStatus,
  setOfferNotExist,
  addUserData,
  removeUserData,
  addReview,
} from './action';
import {CITIES, CityName} from '../const/city';
import { AuthorizationStatus } from '../const/const';
import { ReviewTypes } from '../types/review';
import { UserDataForState } from '../types/user-data';

type InitialStateType = {
  city: CityName;
  offers: OfferTypes[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  activeOffer: OfferTypes | null;
  nearPlaces: OfferTypes[];
  reviews: ReviewTypes[];
  isOfferExist: boolean;
  userData: UserDataForState | null;
}

const initialState: InitialStateType = {
  city: CITIES[0].name,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  activeOffer: null,
  nearPlaces: [],
  reviews: [],
  isOfferExist: false,
  userData: null,
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
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOfferNotExist, (state, action) => {
      state.isOfferExist = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(addUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(removeUserData, (state) => {
      state.userData = null;
    });
});

export { reducer };
