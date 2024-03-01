import {ReviewsType} from '../../../mocks/reviews';
import {PLACE_RATING_RATIO} from '../../../const';
import {humanizeDateTime, humanizeReviewTime} from '../../../const';

type ReviewsProps = {
  reviews: ReviewsType;
}

export default function Reviews({reviews}: ReviewsProps): JSX.Element {
  const {date, user, comment, rating} = reviews;
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt={`${name} 'avatar'`}
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * PLACE_RATING_RATIO}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={humanizeDateTime(date)}>
          {humanizeReviewTime(date)}
        </time>
      </div>
    </li>
  );
}
