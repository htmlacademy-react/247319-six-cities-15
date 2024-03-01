import PlaceCard from '../place-card/place-card';
import {OffersType} from '../../mocks/offers';

type PlaceCardListProps = {
  offers: OffersType[];
}

export default function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
