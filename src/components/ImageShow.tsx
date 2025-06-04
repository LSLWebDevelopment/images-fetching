import type { ImageResponseEntity } from "../entities/ImageEntity";

interface ImageShowProps {
  pic: ImageResponseEntity;
}

export function ImageShow({ pic }: ImageShowProps) {
  return (
    <figure>
      <img src={pic.urls.small} alt={pic.alt_description} />
    </figure>
  );
}
