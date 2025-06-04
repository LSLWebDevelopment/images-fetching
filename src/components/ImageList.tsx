import type { ImageResponseEntity } from "../entities/ImageEntity";
import { ImageShow } from "./ImageShow";

interface ImageListProps {
  photo: ImageResponseEntity[];
}

export function ImageList({ photo }: ImageListProps) {
  const renderedPhotos = photo.map((pic: ImageResponseEntity) => {
    return <ImageShow pic={pic} key={pic.id} />;
  });

  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {renderedPhotos}
    </div>
  );
}
