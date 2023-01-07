import React from "react";
import Link from "./Link";
import Container from "./Container";

const Footer = () => {
  return (
    <Container variant="gray">
      <footer className="py-10 md:py-20 flex items-center justify-center flex-wrap gap-8 flex-col md:flex-row">
        <div className="flex-1 w-full flex items-center justify-center">
          <Link
            variant="gray"
            target="_blank"
            className=""
            href="https://www.google.pl/maps/place/S%C5%82opnice/@49.6760139,20.2621188,12z/data=!3m1!4b1!4m5!3m4!1s0x4716049ad9a9b959:0x42fab8b1bb734300!8m2!3d49.6763801!4d20.3283354"
          >
            Słopnice / Sowliny
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full flex-1">
          <Link variant="gray" href="mailto:mar.bud.malopolska.pl@gmail.com">
            mar.bud.malopolska.pl@gmail.com
          </Link>
          <Link variant="gray" href="mailto:mariowiecek@wp.pl">
            mariowiecek@wp.pl
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full flex-1">
          <Link variant="gray" href="tel:+48695084161" className="text-center">
            Kazimierz Wojcieszak: 695&nbsp;084&nbsp;161
          </Link>
          <Link variant="gray" href="tel:+48604956580" className="text-center">
            Mariusz Więcek: 604&nbsp;956&nbsp;580
          </Link>
        </div>

        <div />
      </footer>
    </Container>
  );
};

export default Footer;
