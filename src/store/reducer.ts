import {createReducer} from '@reduxjs/toolkit';
import {OfferTypes} from '../types/offer';
import {changeLocation, setOffers} from './action';
import {CITIES, CityName} from '../const/city';

type InitialStateType = {
  city: CityName;
  offers: OfferTypes[];
}

const initialState: InitialStateType = {
  city: CITIES[0].name,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
