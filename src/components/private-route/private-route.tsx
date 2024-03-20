import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isReverse?: boolean;
}

export default function PrivateRoute({authorizationStatus, children, isReverse}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}
