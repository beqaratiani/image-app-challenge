export interface AllImage {
  pageParams: number[];
  pages: Pages[];
}

export interface Pages {
  total: number;
  totalHits: number;
  hits: Hits[];
}

export interface Hits {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

export interface SingleImage {
  total: number;
  totalHits: 1;
  hits: Hits[];
}
