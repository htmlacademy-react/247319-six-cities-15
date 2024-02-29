type MapProps = {
  mapClassName: string;
}

export default function Map({mapClassName}: MapProps): JSX.Element {
  return (
    <section className={`${mapClassName}__map map`} />
  );
}
