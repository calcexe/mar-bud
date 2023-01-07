import { NextPage } from "next";
import Menu from "../components/Menu";
import Container from "../components/Container";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import Navbar from "../components/Navbar";
import Head from "../components/Head";

const ONas: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head page="about" />
      <Navbar />

      <Container variant="darkgray" className="flex-1">
        <div className="flex flex-col py-16 gap-16 flex-1 h-full">
          <PageTitle>O nas</PageTitle>
          <div className="flex-1 flex text-xl flex-col items-center text-center gap-4 text-white">
            <Paragraph>
              Firma Mar-Bud powstała w czerwcu 2007 roku. Jej właścicielami są:
            </Paragraph>
            <Paragraph>
              <b>Kaziemierz Wojcieszak</b> oraz <b>Mariusz Więcek</b>,
            </Paragraph>
            <Paragraph>
              którzy w branży budowlano-remontowej pracują od 1997 roku. Firma
              zajmuje się usługami ogólnobudowlanymi, głównie wykończeniami
              wnętrz i elewacjami, a w szczegółności:
            </Paragraph>

            <ul className="self-start text-left my-16 text-base">
              <li>- malowanie,</li>
              <li>- ścianki działowe,</li>
              <li> - adaptacja poddaszy,</li>
              <li>- gładzie gipsowe,</li>
              <li>- flizy,</li>
              <li>- sufity podwieszane i inne,</li>
              <li>- tynki ozdobne,</li>
              <li>- montaż okien i drzwi, </li>
              <li>- wszelkie inne prace związane z wykończeniem wnętrz,</li>
              <li>
                - podłogi (deska barlinecka, układanie paneli podłogowych,
                paneli ściennych i innych),
              </li>
              <li>- zabudowa kominków,</li>
              <li>- drobne prace hydrauliczne i elektryczne.</li>
            </ul>

            <Paragraph>
              oraz docieplanie budynków i wiele innych prac według życzenia
              klienta.
            </Paragraph>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default ONas;
