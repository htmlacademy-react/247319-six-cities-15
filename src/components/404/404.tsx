import './style404.css';
import {Link} from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! Страница не найдена.</p>
        <Link to='/'>Перейти на главную!</Link>
      </div>
    </div>
  );
}
