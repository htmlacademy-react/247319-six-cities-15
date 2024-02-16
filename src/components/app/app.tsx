import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placesFound: number;
}

export default function App({placesFound}: AppProps): JSX.Element {
  return (
    <MainPage placesFound={placesFound}/>
  );
}
