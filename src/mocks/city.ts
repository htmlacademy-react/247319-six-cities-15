export type CityTypes = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export const CITY: CityTypes = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3676,
    longitude: 4.9041,
    zoom: 12,
  }
};
