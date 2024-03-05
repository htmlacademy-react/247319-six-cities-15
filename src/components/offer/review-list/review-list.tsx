import {ReviewsType} from '../../../mocks/reviews';
import {getAuthorizationStatus} from '../../../mocks/authorization-status';
import {AuthorizationStatus} from '../../../const';
import Reviews from '../reviews/reviews';
import ReviewsForm from '../../../components/offer/reviews-form/reviews-form';

type ReviewsListProps = {
  reviews: ReviewsType[];
  offerId: string;
}

export default function ReviewsList({reviews, offerId}: ReviewsListProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const reviewsForOffer = reviews.filter((review) => review.id === offerId);
  const reviewsLength = reviewsForOffer.length;

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsLength}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsForOffer.map((review) => (
          <Reviews
            key={review.id}
            reviews={review}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? (<ReviewsForm />)
        : null}
    </section>
  );
}
