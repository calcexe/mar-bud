import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import {
  getGalleryThumb,
  getGalleryTitle,
  getGalleryUrl,
} from "../helpers/gallery";
import { GalleryCategory } from "../types/GalleryCategory";

type GalleryThumpProps = {
  category: GalleryCategory;
};

const GalleryThumb: FunctionComponent<GalleryThumpProps> = ({ category }) => {
  return (
    <Link
      href={`${getGalleryUrl(category)}`}
      className={clsx(
        "relative flex w-full max-w-[210px] gap-4 flex-col-reverse group items-center"
      )}
    >
      <span className="text-white peer">{getGalleryTitle(category)}</span>
      <Image
        width={210}
        height={210}
        src={getGalleryThumb(category)}
        alt={getGalleryTitle(category)}
        className={clsx(
          "aspect-square h-full transition-all rounded-full overflow-hidden",
          "hover:scale-110 peer-hover:scale-110 group-hover:scale-110"
        )}
      />
    </Link>
  );
};

export default GalleryThumb;
