import { useEffect } from "react";
import { ImageList } from "./components/ImageList";
import { SearchBar } from "./components/SearchBar";
import { usePictureContext } from "./hooks/usePictureContext";

export function App() {
  const { fetchPhotos, photoData } = usePictureContext();

  useEffect(() => {
    fetchPhotos("");
  }, []);

  return (
    <div className="px-5">
      <SearchBar />
      <ImageList photo={photoData} />
    </div>
  );
}
