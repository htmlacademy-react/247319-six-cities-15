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
  setActiveOfferDataLoadingStatus,
  setNearPlacesDataLoadingStatus,
  setReviewsDataLoadingStatus,
} from './action';
import {CITIES, CityName} from '../const/city';
import { AuthorizationStatus } from '../const/const';
import { ReviewTypes } from '../types/review';

type InitialStateType = {
  city: CityName;
  offers: OfferTypes[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  activeOffer: OfferTypes | null;
  isActiveOfferDataLoading: boolean;
  nearPlaces: OfferTypes[];
  isNearPlacesDataLoading: boolean;
  reviews: ReviewTypes[];
  isReviewsDataLoading: boolean;
}

const initialState: InitialStateType = {
  city: CITIES[0].name,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  activeOffer: null,
  isActiveOfferDataLoading: false,
  nearPlaces: [],
  isNearPlacesDataLoading: false,
  reviews: [],
  isReviewsDataLoading: false,
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
    .addCase(setActiveOfferDataLoadingStatus, (state, action) => {
      state.isActiveOfferDataLoading = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(setNearPlacesDataLoadingStatus, (state, action) => {
      state.isNearPlacesDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    });
});

export { reducer };
