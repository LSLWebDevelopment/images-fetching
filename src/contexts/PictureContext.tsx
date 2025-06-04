import { createContext, useState, type ReactNode } from "react";
import type { ImageResponseEntity } from "../entities/ImageEntity";
import { getPhotos } from "../services/getPhotos";

interface PictureContextEntity {
  photoData: ImageResponseEntity[];
  fetchPhotos: (term: string) => void;
}

interface PictureProviderProps {
  children: ReactNode;
}

export const PictureContext = createContext<PictureContextEntity | null>(null);

export function PictureProvider({ children }: PictureProviderProps) {
  const [photoData, setPhotoData] = useState<ImageResponseEntity[]>([]);

  const fetchPhotos = async (term: string) => {
    const response = await getPhotos(term);
    setPhotoData(response);
  };

  return (
    <PictureContext.Provider value={{ photoData, fetchPhotos }}>
      {children}
    </PictureContext.Provider>
  );
}
