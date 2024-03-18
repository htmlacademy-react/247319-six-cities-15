import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Layout from '../layout/layout';
import {getAuthorizationStatus} from '../../mocks/authorization-status';
import {OfferTypes} from '../../types/offer';
import {ReviewTypes} from '../../types/review';

type AppProps = {
  offers: OfferTypes[];
  reviews: ReviewTypes[];
}

export default function App({offers, reviews}: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout
                offers={offers}
              />
            }
          >
            <Route
              index
              element={
                <MainPage />
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage
                    offers={offers}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferPage
                  offers={offers}
                  reviews={reviews}
                />
              }
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
