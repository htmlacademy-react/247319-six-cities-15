import dayjs from 'dayjs';
const PLACE_QUANTITY = 500;
const DATE_FORMAT_IN_REVIEW = 'YY-MM-DD';
const DATE_FORMAT_IN_REVIEW_TEXT = 'MMMM YYYY';

export const PLACE_RATING_RATIO = 20;

export const Setting = {
  PlacesFound: Math.floor(Math.random() * PLACE_QUANTITY)
};

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

function humanizeDateTime(date: string) {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW.toUpperCase()) : '';
}

function humanizeReviewTime(date: string) {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW_TEXT.toUpperCase()) : '';
}

export {
  humanizeDateTime,
  humanizeReviewTime,
};
