import {OffersType} from '../../mocks/offers';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoritesListProps = {
  favoriteOffers: OffersType[];
}

export default function FavoritesList({favoriteOffers}: FavoritesListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {favoriteOffers.map((offer) => (
        <FavoritesItem
          key={offer.id}
          favoriteOffer={offer}
        />
      ))}
    </ul>
  );
}
