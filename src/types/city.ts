export type CityTypes = {
  id?: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
