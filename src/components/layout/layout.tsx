import {Outlet, Link, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';
import {getAuthorizationStatus} from '../../mocks/authorization-status';
import Logo from '../logo/logo';
import {useAppSelector} from '../../hooks/store';

type LayoutConfig = {
  rootClassName: string;
  linkClassName: string;
  needRenderUserInfo: boolean;
  needRenderFooter: boolean;
}

const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  rootClassName: '',
  linkClassName: '',
  needRenderUserInfo: true,
  needRenderFooter: false,
};

const LayoutConfigMap: Record<AppRoute, LayoutConfig> = {
  [AppRoute.Root]: {
    rootClassName: ' page--gray page--main',
    linkClassName: ' header__logo-link--active',
    needRenderUserInfo: true,
    needRenderFooter: false,
  },
  [AppRoute.Login]: {
    rootClassName: ' page--gray page--login',
    linkClassName: '',
    needRenderUserInfo: false,
    needRenderFooter: false,
  },
  [AppRoute.Favorites]: {
    rootClassName: '',
    linkClassName: '',
    needRenderUserInfo: true,
    needRenderFooter: true,
  },
  [AppRoute.Offer]: DEFAULT_LAYOUT_CONFIG,
};

export default function Layout() {
  const offers = useAppSelector((state) => state.offers);
  const {pathname} = useLocation();
  const layoutConfig: LayoutConfig = LayoutConfigMap[pathname as AppRoute] || DEFAULT_LAYOUT_CONFIG;
  const {rootClassName, linkClassName, needRenderUserInfo, needRenderFooter} = layoutConfig;
  const authorizationStatus = getAuthorizationStatus();
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesEmptyPage = favoritesOffers.length === 0;

  return (
    <div className={`page${rootClassName} ${favoritesEmptyPage ? 'page--favorites-empty' : ''}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className={`header__logo-link ${linkClassName}`}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            {needRenderUserInfo ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to={AppRoute.Favorites}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      {authorizationStatus === AuthorizationStatus.Auth ? (
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">{favoritesOffers.length}</span>
                        </>
                      ) : <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <li className="header__nav-item">
                      <Link to='/' className="header__nav-link">
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
      {needRenderFooter ? (
        <footer className="footer">
          <Logo />
        </footer>
      ) : null}
    </div>
  );
}
