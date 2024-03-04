type GalleryProps = {
  src: string;
  alt: string;
}

export default function Gallery({src, alt}: GalleryProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={src}
        alt={alt}
      />
    </div>
  );
}
