import clsx from "clsx";
import type { NextPage } from "next";
import LinkButton from "../components/LinkButton";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Config } from "../helpers/Config";
import Head from "../components/Head";

const Home: NextPage = () => {
  return (
    <div>
      <Head page="home" />
      <Navbar />

      <main className="">
        <Container variant="blue">
          <section className="w-full py-20 md:py-52 flex flex-col justify-center items-center">
            <Heading variant="h1">Usługi ogólnobudowlane</Heading>
            <div className="flex mt-10 flex-wrap justify-center">
              <LinkButton variant="transparent" border="white" href="/kontakt">
                Kontakt
              </LinkButton>
              <LinkButton variant="transparent" border="white" href="/galeria">
                Realizacje
              </LinkButton>
            </div>
          </section>
        </Container>

        <Container variant="gray">
          <section
            className={clsx(
              "flex flex-col justify-center items-center md:py-24 py-12 w-full"
            )}
          >
            <Heading variant="h2" className="pb-9">
              Serdecznie witamy
            </Heading>
            <Paragraph className="text-center">
              Jeśli szukasz solidnej firmy, która wykona dla Ciebie wszelkie
              prace remontowe, budowlane oraz wykończeniowe, to nie musisz
              szukać dalej!
            </Paragraph>
            <Paragraph className="text-center">
              Sprawdź naszą ofertę, jeśli Ci odpowiada, skontaktuj się z nami, a
              na pewno spełnimy Twoje oczekiwania.
            </Paragraph>
          </section>
        </Container>

        <Container variant="blue">
          <section className="flex justify-center items-center py-12 md:py-24 w-full flex-col">
            <h3 className="uppercase mt-4 mb-5 text-2xl text-white text-center">
              Czym się zajmujemy?
            </h3>
            <LinkButton variant="blue" href="/o-nas">
              Dowiedz się
            </LinkButton>
          </section>
        </Container>

        <Container variant="gray">
          <section className="flex justify-center items-center py-12 md:py-24 w-full flex-col">
            <Heading variant="h1">Nasze ostatnie prace</Heading>
            <Paragraph className="pb-9 text-center">
              Po więcej zapraszamy do naszej galerii
            </Paragraph>
            <LinkButton variant="red" href="/galeria">
              Zobacz
            </LinkButton>
          </section>
        </Container>

        <Container variant="red">
          <section className="flex text-2xl text-white py-12 items-center justify-center flex-wrap">
            <div className="flex-1">
              <h3 className="text-center w-fit">Znajdź nas na mapie!</h3>
            </div>
            <LinkButton
              target="_blank"
              href={Config.GOOGLE_MAPS}
              border="white"
              variant="red"
            >
              Przejdź
            </LinkButton>
          </section>
        </Container>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
