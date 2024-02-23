import PlaceCard from '../../components/place-card/place-card';
import NavTab from '../../components/nav-tab/nav-tab';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import {mockData} from '../../mocks/mock-data';
import {Helmet} from 'react-helmet-async';

type MainPageProps = {
  placesFound: number;
}

export default function MainPage({placesFound}: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>Enjoy your trip. 6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city: string) => (
              <NavTab
                key={city}
                city={city}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by </span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {mockData.map((item) => (
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
          <div className="cities__right-section">
            <Map mapClassName='cities' />
          </div>
        </div>
      </div>
    </main>
  );
}