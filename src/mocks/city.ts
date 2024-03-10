export type CityTypes = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export const CITY: CityTypes[] = [
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 12
    }
  },
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 12
    }
  }
];

function getCityData(cityName: string): CityTypes {
  return CITY.find((city) => city.name === cityName) || CITY[0];
}

export {getCityData};
