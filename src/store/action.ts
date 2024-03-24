import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../const/city';
import {OfferTypes} from '../types/offer';
import { AuthorizationStatus } from '../const/const';

export const changeLocation = createAction<CityName>('location/setCityName');

export const loadOffers = createAction<OfferTypes[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');
