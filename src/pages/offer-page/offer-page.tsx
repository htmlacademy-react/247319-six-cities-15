import Header from '../../components/header/header';
import Gallery from '../../components/offer/gallery/gallery';
import OfferMainInfo from '../../components/offer/main-info/offer-main-info';
import InsideOptions from '../../components/offer/inside-options/inside-options';
import Host from '../../components/offer/host/host';
import Reviews from '../../components/offer/reviews/reviews';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import {mockData} from '../../mock-data';
import {Helmet} from 'react-helmet-async';

export default function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Offer. 6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferMainInfo />
              <InsideOptions />
              <Host />
              <Reviews />
            </div>
          </div>
          <Map attribute='offer' />
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
