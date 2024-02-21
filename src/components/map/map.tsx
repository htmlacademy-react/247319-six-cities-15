type AttributeType = {
  attribute: string;
}

export default function Map({attribute}: AttributeType): JSX.Element {
  return (
    <section className={`${attribute}__map map`} />
  );
}
