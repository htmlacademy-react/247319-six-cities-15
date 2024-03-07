import PlaceCard from '../place-card/place-card';
import {OffersType} from '../../mocks/offers';

type PlaceCardListProps = {
  offers: OffersType[];
  onMouseOver: (offerId: string) => void;
  onMouseOut: () => void;
  activePlaceCard: string | null;
}

export default function PlaceCardList({offers, onMouseOver, onMouseOut, activePlaceCard}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => onMouseOver(offer.id)}
          onMouseOut={onMouseOut}
          isActive={activePlaceCard === offer.id}
        />
      ))}
    </div>
  );
}
