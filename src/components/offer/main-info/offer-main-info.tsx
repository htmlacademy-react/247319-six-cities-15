import {OffersType} from '../../../mocks/offers';
import {convertToPercentage, capitalizeFirstLetter} from '../../../const';

type OfferMainInfoProps = {
  selectedOffer: OffersType;
}

export default function OfferMainInfo({selectedOffer}: OfferMainInfoProps): JSX.Element {
  const {isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price} = selectedOffer;
  return (
    <>
      {isPremium ?
        <div className="offer__mark">
          <span>Premium</span>
        </div> : null}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button
          className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
          type="button"
        >
          <svg className="offer__bookmark-icon" width={31} height={33}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: convertToPercentage(rating) }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}
