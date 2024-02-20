import Header from '../../components/header/header';
import FavEmpty from '../../components/fav-empty/fav-empty';
import Footer from '../../components/footer/footer';

export default function FavoritesEmptyPage(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <FavEmpty />
      <Footer />
    </div>
  );
}
