import FavEmpty from '../../components/fav-empty/fav-empty';
import {Helmet} from 'react-helmet-async';

export default function FavoritesEmptyPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>There are no favorites places</title>
      </Helmet>
      <FavEmpty />
    </>
  );
}
