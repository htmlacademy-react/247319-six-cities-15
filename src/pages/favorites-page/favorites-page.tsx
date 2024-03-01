import {Helmet} from 'react-helmet-async';
import {OffersType} from '../../mocks/offers';
import FavoritesList from '../../components/favorites-list/favorites-list';

type FavoritesPageProps = {
  offers: OffersType[];
}

export default function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite === true);

  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>Favorites. 6 cities</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favoriteOffers={favoritesOffers} />
        </section>
      </div>
    </main>
  );
}
