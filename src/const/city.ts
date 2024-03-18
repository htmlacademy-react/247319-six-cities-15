import {CityTypes} from '../types/city';

export const CITY_NAMES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const CITIES = [
  {
    id: 'Paris',
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12
    }
  },
  {
    id: 'Cologne',
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12
    }
  },
  {
    id: 'Brussels',
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 12
    }
  },
  {
    id: 'Amsterdam',
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12
    }
  },
  {
    id: 'Hamburg',
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12
    }
  },
  {
    id: 'Dusseldorf',
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 12
    }
  }
] as const;

export type CityName = (typeof CITIES)[number]['name'];

function getCityData(cityName: string): CityTypes {
  return CITIES.find((city) => city.name === cityName) || CITIES[0];
}

export {getCityData};
