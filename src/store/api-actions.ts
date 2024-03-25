import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import {
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
import { OfferTypes } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from '.';
import { ReviewTypes } from '../types/review';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferTypes[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setActiveOfferDataLoadingStatus(true));
    const {data} = await api.get<OfferTypes>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setActiveOfferDataLoadingStatus(false));
    dispatch(setActiveOffer(data));
  },
);

export const fetchNearPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setNearPlacesDataLoadingStatus(true));
    const {data} = await api.get<OfferTypes[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearPlacesDataLoadingStatus(false));
    dispatch(loadNearPlaces(data));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async(offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatus(true));
    const {data} = await api.get<ReviewTypes[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(setReviewsDataLoadingStatus(false));
    dispatch(loadReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
