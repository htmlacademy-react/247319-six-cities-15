type AttributeType = {
  mapClassName: string;
}

export default function Map({mapClassName}: AttributeType): JSX.Element {
  return (
    <section className={`${mapClassName}__map map`} />
  );
}
