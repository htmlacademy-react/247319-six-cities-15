import {OffersType} from '../../mocks/offers';
import {Link} from 'react-router-dom';
import {convertToPercentage, capitalizeFirstLetter} from '../../const';

type FavoritesItemProps = {
  favoriteOffer: OffersType;
}

export default function FavoritesItem({favoriteOffer}: FavoritesItemProps): JSX.Element {
  const {id, title, type, price, city, previewImage, rating, isPremium, isFavorite} = favoriteOffer;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> : null}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${id}`}>
              <img
                className="place-card__image"
                src={previewImage}
                width={150}
                height={110}
                alt={title}
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{price}</b>
                <span className="place-card__price-text">
                  /&nbsp;night
                </span>
              </div>
              <button
                className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: convertToPercentage(rating) }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${id}`}>
                {title}
              </Link>
            </h2>
            <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
          </div>
        </article>
      </div>
    </li>
  );
}
