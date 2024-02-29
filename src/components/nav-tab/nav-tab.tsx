import {NavLink} from 'react-router-dom';

export default function NavTab({city}: {city: string}): JSX.Element {
  return (
    <li className="locations__item">
      <NavLink to='/' className="locations__item-link tabs__item">
        <span>{city}</span>
      </NavLink>
    </li>
  );
}
