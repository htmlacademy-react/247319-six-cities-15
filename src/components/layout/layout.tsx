import {Outlet, Link, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../mocks/authorization-status';
import Logo from '../logo/logo';

const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let needRenderUserInfo = true;
  let needRenderFooter = false;

  if (pathname === AppRoute.Root) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    needRenderUserInfo = false;
  } else if (pathname === AppRoute.Favorites) {
    needRenderFooter = true;
  }

  return {rootClassName, linkClassName, needRenderUserInfo, needRenderFooter};
};

export default function Layout() {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, needRenderUserInfo, needRenderFooter} = getLayoutState(pathname as AppRoute);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page ${rootClassName}`}>
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
            {
              needRenderUserInfo ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      {authorizationStatus === AuthorizationStatus.Auth ? (
                        <Link to={AppRoute.Favorites}
                          className="header__nav-link header__nav-link--profile"
                        >
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__user-name user__name">
                                Oliver.conner@gmail.com
                          </span>
                          <span className="header__favorite-count">3</span>
                        </Link>
                      ) : (
                        <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                          <span className="header__login">Sign in</span>
                        </Link>
                      )}
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
              ) : null
            }
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
