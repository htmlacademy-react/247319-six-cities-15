import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {OfferTypes} from '../types/offer';
import {changeLocation, pickOffersAtLocation} from './action';
import {CITIES, CityName} from '../const/city';

type InitialStateType = {
  city: CityName;
  offers: OfferTypes[];
}

const initialState: InitialStateType = {
  city: CITIES[3].name,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.city = action.payload;
    })
    .addCase(pickOffersAtLocation, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
