import NavTab from '../../components/nav-tab/nav-tab';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';
import {CITIES} from '../../const';
import {Helmet} from 'react-helmet-async';

export default function MainEmptyPage(): JSX.Element {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <Helmet>
        <title>Oops... Select another city. 6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((item) => (
              <NavTab key={item} city={item} />
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <NoPlacesToStay />
          <div className="cities__right-section" />
        </div>
      </div>
    </main>
  );
}