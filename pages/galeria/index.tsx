import { NextPage } from "next";
import Menu from "../../components/Menu";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GalleryThumb from "../../components/GalleryThumb";
import clsx from "clsx";
import { GalleryCategory } from "../../types/GalleryCategory";
import Navbar from "../../components/Navbar";
import Head from "../../components/Head";

const Galeria: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Head page="gallery" />
      <Navbar />

      <Container
        variant="darkgray"
        className="flex-1 flex items-center justify-center py-16"
      >
        <h2
          className={clsx(
            "text-xl text-white mb-16 relative w-min",
            "after:absolute after:-bottom-2 after:left-0 after:-right-8 after:h-[2px] after:bg-[#08c]"
          )}
        >
          Galeria
        </h2>
        <div className="flex flex-wrap gap-6 max-w-[calc(240px*2+24px*2)] mx-auto justify-center">
          <GalleryThumb category={GalleryCategory.ELEWACJE} />
          <GalleryThumb category={GalleryCategory.LAZIENKI} />
          <GalleryThumb category={GalleryCategory.KOMINKI} />
          <GalleryThumb category={GalleryCategory.ADAPTACJE} />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Galeria;
