import Gallery from '../../components/offer/gallery/gallery';
import OfferMainInfo from '../../components/offer/main-info/offer-main-info';
import InsideOptions from '../../components/offer/inside-options/inside-options';
import Host from '../../components/offer/host/host';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import {Helmet} from 'react-helmet-async';
import {OffersType} from '../../mocks/offers';
import {useParams} from 'react-router-dom';
import {ReviewsType} from '../../mocks/reviews';
import ReviewsList from '../../components/offer/review-list/review-list';
import NotFoundPage from '../not-found-page/not-found-page';

type OfferPageProps = {
  offers: OffersType[];
  reviews: ReviewsType[];
}

export default function OfferPage({offers, reviews}: OfferPageProps): JSX.Element {
  const params = useParams();
  const offerId = params.id || '';
  const selectedOffer = offers.find((offer) => offer.id === offerId)!;

  if(!selectedOffer) {
    return <NotFoundPage />;
  }

  const {city, description, goods, host, images} = selectedOffer;
  const nameCity = city.name;
  const {name, avatarUrl, isPro} = host;
  const nearPlaces = offers.filter((offer) => offer.city.name === selectedOffer.city.name);

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>Offer. {nameCity}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item, index) => (
              <Gallery src={item} alt={`Image ${index + 1}`} key={item}/>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferMainInfo selectedOffer={selectedOffer}/>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((item) => (
                  <InsideOptions goods={item} key={item} />
                ))}
              </ul>
            </div>
            <Host
              name={name}
              avatarUrl={avatarUrl}
              isPro={isPro}
              description={description}
            />
            <ReviewsList
              reviews={reviews}
              offerId={offerId}
            />
          </div>
        </div>
        <Map
          mapClassName='offer'
          city={city}
          selectedOffer={offerId}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {nearPlaces.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
