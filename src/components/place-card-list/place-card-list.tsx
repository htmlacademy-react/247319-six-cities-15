import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {OffersType} from '../../mocks/offers';

type PlaceCardListProps = {
  offers: OffersType[];
}

export default function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState<string | null>(offers[0].id);

  const handleMouseOver = (offerId: string) => {
    setActivePlaceCard(offerId);
  };

  // const handleMouseOut = () => {
  //   setActivePlaceCard(null);
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => handleMouseOver(offer.id)}
          // onMouseOut={handleMouseOut}
          isActive={activePlaceCard === offer.id}
        />
      ))}
    </div>
  );
}
