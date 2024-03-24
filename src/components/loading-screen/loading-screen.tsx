import './loading-screen.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <p>Please wait while the data is being loaded.</p>
    </div>
  );
}
