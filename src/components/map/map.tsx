import {useRef, useEffect} from 'react';
import useMap from './useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CityTypes} from '../../mocks/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {offers} from '../../mocks/offers';

type MapProps = {
  mapClassName: string;
  city: CityTypes;
  selectedOffer: string | null;
};

export default function Map({mapClassName, city, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [20, 40]
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, selectedOffer]);

  return (
    <section
      ref={mapRef}
      style={{ height: 733.61 }}
      className={`${mapClassName}__map map`}
    />
  );
}
