import LoginForm from '../../components/login-form/login-form';
import {Helmet} from 'react-helmet-async';

export default function LoginPage(): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Log in to the app! 6 cities</title>
      </Helmet>
      <div className="page__login-container container">
        <LoginForm />
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
