import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Container from "../../components/Container";
import { GalleryCategory } from "../../types/GalleryCategory";
import Footer from "../../components/Footer";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";
import "react-image-lightbox/style.css";
import Link from "next/link";
import { getGalleryTitle } from "../../helpers/gallery";
import PageTitle from "../../components/PageTitle";
import Navbar from "../../components/Navbar";
import Head from "../../components/Head";

type GalleryCategoryProps = {
  category: GalleryCategory;
  images: string[];
};

const Category: NextPage<GalleryCategoryProps> = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head page="gallery" />
      <Navbar />

      <Container variant="darkgray">
        <div className="flex-1 flex flex-col  py-16 gap-8">
          <PageTitle>Galeria</PageTitle>
          <Link
            href="/galeria"
            className="text-white flex gap-2 items-center hover:text-[#08c]"
          >
            <Image
              src={"/images/icon_arrow_left.png"}
              width={32}
              height={32}
              alt="Wstecz"
              className="w-3 h-auto"
            />
            Powrót
          </Link>
          <h2 className="self-center text-white">
            {getGalleryTitle(props.category)}
          </h2>
          <div>
            <Gallery images={props.images ?? []} />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

const getGalleryImages = (category: GalleryCategory) => {
  let count = 0;
  switch (category) {
    case GalleryCategory.ELEWACJE:
      count = 22;
      break;
    case GalleryCategory.LAZIENKI:
      count = 62;
      break;
    case GalleryCategory.KOMINKI:
      count = 6;
      break;
    case GalleryCategory.ADAPTACJE:
      count = 10;
      break;
  }
  return Array.from(Array(count).keys(), (item) => item + 1).map(
    (index) => `/images/${category}/${index}.jpg`
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const paramCategory = context.params?.category;
  const category = Object.entries(GalleryCategory).find(
    ([, value]) => value === paramCategory
  );
  if (category) {
    const images = getGalleryImages(category[1]) ?? [];
    return {
      props: {
        category,
        images,
      },
    };
  }
  return {
    redirect: {
      destination: "/galeria",
    },
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.values(GalleryCategory).map((category) => ({
    params: { category },
  }));
  return { paths, fallback: false };
};

export default Category;
