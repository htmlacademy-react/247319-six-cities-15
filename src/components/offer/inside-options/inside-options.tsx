type InsideOptionsProps = {
  goods: string;
}

export default function InsideOptions({goods}: InsideOptionsProps): JSX.Element {
  return (
    <li className="offer__inside-item">{goods}</li>
  );
}
