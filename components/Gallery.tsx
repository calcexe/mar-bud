import clsx from "clsx";
import Image from "next/image";
import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";

type GalleryProps = {
  images: string[];
};

const PER_PAGE = 28;

const getImageUrl = (image: string) =>
  `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mar-bud.malopolska.pl"
  }${image}`;

const Gallery: FunctionComponent<GalleryProps> = ({ images }) => {
  const [page, setPage] = useState(0);
  const [currentImage, setCurrentImage] = useState(-1);
  const pagesCount = useMemo(
    () => Math.floor(images.length / PER_PAGE) + 1,
    [images.length]
  );

  useEffect(() => {
    window?.scrollTo({ behavior: "smooth", top: 0 });
  }, [page]);

  const getCurrentImageIndex = (index: number) => page * PER_PAGE + index;

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {images
        .slice(page * PER_PAGE, (page + 1) * PER_PAGE)
        .map((image, index) => (
          <Image
            src={image}
            width={220}
            tabIndex={0}
            height={200}
            alt=""
            className={clsx(
              "aspect-video h-auto object-cover cursor-pointer transition-all",
              "hover:scale-110 focus-visible:scale-110"
            )}
            key={image}
            onClick={() => setCurrentImage(getCurrentImageIndex(index))}
          />
        ))}
      <div className="w-full justify-center gap-8 flex flex-wrap">
        <button
          disabled={page === 0}
          className={clsx(
            "text-white px-2 transition-colors",
            "hover:text-[#329fd6] hover:cursor-pointer",
            "disabled:text-[#939393] disabled:cursor-default"
          )}
          onClick={() => setPage(page - 1)}
        >
          &lt;&nbsp;Poprzednia
        </button>
        <span className="text-white">{`${page + 1} / ${pagesCount}`}</span>
        <button
          disabled={page === pagesCount - 1}
          className={clsx(
            "text-white px-2 transition-colors",
            "hover:text-[#329fd6] hover:cursor-pointer",
            "disabled:text-[#939393] disabled:cursor-default"
          )}
          onClick={() => setPage(page + 1)}
        >
          Następna&nbsp;&gt;
        </button>
      </div>
      {currentImage >= 0 && (
        <Lightbox
          onImageLoad={() => {
            window?.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={() => setCurrentImage(-1)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
          mainSrc={getImageUrl(images[currentImage])}
          prevSrc={getImageUrl(
            images[(currentImage + images.length - 1) % images.length]
          )}
          nextSrc={getImageUrl(images[(currentImage + 1) % images.length])}
        />
      )}
    </div>
  );
};

export default Gallery;
