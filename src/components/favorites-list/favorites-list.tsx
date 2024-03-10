import {OffersType} from '../../mocks/offers';
import FavoritesItem from '../favorites-item/favorites-item';
import {Link} from 'react-router-dom';

type FavoritesListProps = {
  favoriteOffers: OffersType[];
}

export default function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {
  const groupedOffersByCity: Record<string, OffersType[]> = favoriteOffers.reduce((acc, favoriteOffer) => {
    const city = favoriteOffer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(favoriteOffer);
    return acc;
  }, {} as Record<string, OffersType[]>);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffersByCity).map(([city, groupedFavoriteOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {groupedFavoriteOffers.map((offer) => (
              <FavoritesItem
                key={offer.id}
                favoriteOffer={offer}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
