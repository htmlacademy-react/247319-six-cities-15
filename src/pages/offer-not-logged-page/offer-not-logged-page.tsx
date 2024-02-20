import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-components/offer-gallery/offer-gallery';
import OfferMainInfo from '../../components/offer-components/offer-main-info/offer-main-info';
import OfferInsideOptions from '../../components/offer-components/offer-inside-options/offer-inside-options';
import OfferHost from '../../components/offer-components/offer-host/offer-host';
import OfferReviews from '../../components/offer-components/offer-reviews/offer-reviews';
import OfferMap from '../../components/offer-components/offer-map/offer-map';
import PlaceCard from '../../components/place-card/place-card';
import {mockData} from '../../mock-data';


export default function OfferNotLoggedPage(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferMainInfo />
              <OfferInsideOptions />
              <OfferHost />
              <OfferReviews />
            </div>
          </div>
          <OfferMap />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {mockData.slice(0,3).map((item) => (
                <PlaceCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  previewImage={item.previewImage}
                  rating={item.rating}
                  isPremium={item.isPremium}
                  isFavorite={item.isFavorite}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
