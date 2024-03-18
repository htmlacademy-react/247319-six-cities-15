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
import {offers} from '../../mocks/offers';
import {ReviewTypes} from '../../types/review';
import {setOffers} from '../../store/action';
import {useAppDispatch} from '../../hooks/store';
import {useEffect} from 'react';

type AppProps = {
  reviews: ReviewTypes[];
}

export default function App({reviews}: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(offers));
  });

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout />
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
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferPage
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
