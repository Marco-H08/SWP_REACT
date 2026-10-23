import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

const images: GalleryItem[] = [
  {
    original: "https://picsum.photos/1000/600?grayscale",
    thumbnail: "https://picsum.photos/250/150?grayscale",
  },
  {
    original: "https://picsum.photos/1000/600/?blur=2",
    thumbnail: "https://picsum.photos/250/150/?blur=2",
  },
  {
    original: "https://picsum.photos/1050/600",
    thumbnail: "https://picsum.photos/250/150",
  },
];

export function MyGallery() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <ImageGallery
      ref={galleryRef}
      items={images}
      onSlide={(index) => console.log(index)}
    />
  );
}
