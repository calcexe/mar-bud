import { GalleryCategory } from "../types/GalleryCategory";

export const getGalleryTitle = (category: GalleryCategory) => {
  switch (category) {
    case GalleryCategory.ADAPTACJE:
      return "Adaptacje";
    case GalleryCategory.ELEWACJE:
      return "Elewacje";
    case GalleryCategory.KOMINKI:
      return "Kominki";
    case GalleryCategory.LAZIENKI:
      return "Łazienki";
  }
};

export const getGalleryThumb = (category: GalleryCategory) => {
  const baseUrl = `/images/${category}`;
  switch (category) {
    case GalleryCategory.ADAPTACJE:
      return `${baseUrl}/1.jpg`;
    case GalleryCategory.ELEWACJE:
      return `${baseUrl}/1.jpg`;
    case GalleryCategory.KOMINKI:
      return `${baseUrl}/1.jpg`;
    case GalleryCategory.LAZIENKI:
      return `${baseUrl}/1.jpg`;
  }
};

export const getGalleryUrl = (category: GalleryCategory) =>
  `galeria/${category}`;
