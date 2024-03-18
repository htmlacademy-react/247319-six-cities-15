import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../const/city';
import {OfferTypes} from '../types/offer';

export const changeLocation = createAction<CityName>('location/setCityName');

export const setOffers = createAction<OfferTypes[]>('offers/setOffers');
