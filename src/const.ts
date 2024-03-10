import dayjs from 'dayjs';
const PLACE_QUANTITY = 500;
const DATE_FORMAT_IN_REVIEW = 'YY-MM-DD';
const DATE_FORMAT_IN_REVIEW_TEXT = 'MMMM YYYY';

const PLACE_RATING_RATIO = 20;

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

function humanizeDateTime(date?: string): string {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW.toUpperCase()) : '';
}

function humanizeReviewTime(date?: string): string {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW_TEXT.toUpperCase()) : '';
}

function capitalizeFirstLetter(text: string | undefined | null): string {
  if (text === undefined || text === null) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function convertToPercentage(rating: number | undefined | null): string {
  if (rating === undefined || rating === null) {
    return '';
  }
  return `${rating * PLACE_RATING_RATIO}%`;
}

export const URL_MARKER_DEFAULT = '../markup/img/pin.svg';

export const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';

export {
  humanizeDateTime,
  humanizeReviewTime,
  capitalizeFirstLetter,
  convertToPercentage,
};
