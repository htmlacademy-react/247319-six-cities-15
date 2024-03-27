import {ReviewTypes} from '../../../types/review';
import {convertToPercentage} from '../../../const/const';
import {humanizeDateTime, humanizeReviewTime} from '../../../const/const';

type ReviewsProps = {
  review: ReviewTypes;
}

export default function Reviews({review}: ReviewsProps): JSX.Element {
  const {date, user, comment, rating} = review;
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
            <span style={{width: convertToPercentage(rating) }} />
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
