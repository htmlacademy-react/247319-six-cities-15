import {AuthorizationStatus} from '../../../const/const';
import Reviews from '../reviews/reviews';
import ReviewsForm from '../../../components/offer/reviews-form/reviews-form';
import {useAppSelector} from '../../../hooks/store';

export default function ReviewsList(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviews = useAppSelector((state) => state.reviews);
  const reviewsLength = reviews.length;

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsLength}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
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
