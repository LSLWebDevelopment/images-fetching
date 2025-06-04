import axios from "axios";
import type {
  ImageListResponseEntity,
  ImageResponseEntity,
} from "../entities/ImageEntity";

const url = "https://api.unsplash.com/search/photos?query=";

export async function getPhotos(term: string): Promise<ImageResponseEntity[]> {
  const response = await axios.get<ImageListResponseEntity>(url.concat(term), {
    headers: {
      Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
    },
  });

  return response.data.results;
}
