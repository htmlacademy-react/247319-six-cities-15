import {Link} from 'react-router-dom';
import {OfferTypes} from '../../types/offer';
import {capitalizeFirstLetter, convertToPercentage} from '../../const/const';

type PlaceCardProps = {
  offer: OfferTypes;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  isActive?: boolean;
  classNameItem: string;
}

export default function PlaceCard({offer, onMouseOver, onMouseOut, isActive, classNameItem}: PlaceCardProps): JSX.Element {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;

  return (
    <article
      className={`${classNameItem} place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
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
            <span style={{width: convertToPercentage(rating)}} />
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
  );
}
