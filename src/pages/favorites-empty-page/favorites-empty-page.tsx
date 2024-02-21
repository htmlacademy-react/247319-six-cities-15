import Header from '../../components/header/header';
import FavEmpty from '../../components/fav-empty/fav-empty';
import Footer from '../../components/footer/footer';
import {Helmet} from 'react-helmet-async';

export default function FavoritesEmptyPage(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Helmet>
        <title>There are no favorites places</title>
      </Helmet>
      <Header />
      <FavEmpty />
      <Footer />
    </div>
  );
}
