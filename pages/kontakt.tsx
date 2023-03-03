import { NextPage } from "next";
import Menu from "../components/Menu";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import Image from "next/image";
import clsx from "clsx";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import { Config } from "../helpers/Config";
import Head from "../components/Head";

const Kontakt: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head page="contact" />
      <Navbar />

      <Container variant="darkgray" className="flex-1">
        <div className="flex flex-col py-16 gap-16 flex-1 h-full">
          <PageTitle>Kontakt</PageTitle>
          <div className="flex-1 flex flex-wrap justify-evenly gap-8">
            <div className="gap-5 flex justify-center items-center">
              <div className="group flex gap-8 items-center min-w-fit">
                <Image
                  src={"/images/icon_localization.png"}
                  width={100}
                  height={100}
                  alt=""
                  className={clsx(
                    "w-16 h-16 transition-transform",
                    "group-hover:rotate-12"
                  )}
                />
                <Link
                  className="h-min"
                  variant="white"
                  target="_blank"
                  href={Config.GOOGLE_MAPS}
                >
                  Słopnice/Sowliny
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="group flex gap-8 items-center min-w-fit">
                <Image
                  src={"/images/icon_mail.png"}
                  width={100}
                  height={100}
                  alt=""
                  className={clsx(
                    "w-16 h-16 transition-transform",
                    "group-hover:rotate-12"
                  )}
                />
                <div className="flex flex-col">
                  <Link
                    variant="white"
                    href="mailto:mar.bud.malopolska.pl@gmail.com"
                    className="break-all"
                  >
                    mar.bud.malopolska.pl@gmail.com
                  </Link>
                  <Link
                    variant="white"
                    href="mailto:mariowiecek@wp.pl"
                    className="break-all"
                  >
                    mariowiecek@wp.pl
                  </Link>
                </div>
              </div>
            </div>
            <div className="gap-5 flex justify-center items-center">
              <div className="group flex gap-8 items-center min-w-fit">
                <Image
                  src={"/images/icon_phone.png"}
                  width={100}
                  height={100}
                  alt=""
                  className={clsx(
                    "w-16 h-16 transition-transform",
                    "group-hover:rotate-12"
                  )}
                />
                <div className="flex flex-col">
                  <Link variant="white" href="tel:+48695084161">
                    Kaziemierz Wojcieszek: 695 084 161
                  </Link>
                  <Link variant="white" href="tel:+48604956580">
                    Mariusz Więcek: 604 956 580
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Kontakt;
