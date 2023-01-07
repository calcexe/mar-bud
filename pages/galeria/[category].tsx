import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Menu from "../../components/Menu";
import Container from "../../components/Container";
import { GalleryCategory } from "../../types/GalleryCategory";
import Footer from "../../components/Footer";
import clsx from "clsx";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Gallery from "../../components/Gallery";
import "react-image-lightbox/style.css";
import Link from "next/link";
import { getGalleryTitle } from "../../helpers/gallery";
import PageTitle from "../../components/PageTitle";
import IconArrowLeft from "../../images/icon_arrow_left.png";
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
            <Image src={IconArrowLeft} alt="Wstecz" className="w-3 h-auto" />
            Powrót
          </Link>
          <h2 className="self-center text-white">
            {getGalleryTitle(props.category)}
          </h2>
          <div>
            <Gallery images={props.images} />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

const getGalleryImages = (category: GalleryCategory) => {
  const dirRelativeToPublicFolder = `images/${category}`;
  const dir = path.resolve("./public", dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);
  const images = filenames.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );
  return images;
};

export const getStaticProps: GetStaticProps = (context) => {
  const paramCategory = context.params?.category;
  const category = Object.entries(GalleryCategory).find(
    ([, value]) => value === paramCategory
  )?.[1];
  if (category !== undefined) {
    const images = getGalleryImages(category) ?? [];
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
  return { paths, fallback: true };
};

export default Category;
