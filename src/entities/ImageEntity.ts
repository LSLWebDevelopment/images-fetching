export interface ImageResponseEntity {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

export interface ImageListResponseEntity {
  // data: {
  results: ImageResponseEntity[];
  // };
}
