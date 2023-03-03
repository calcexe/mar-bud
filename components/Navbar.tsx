import React, { useState } from "react";
import Container from "./Container";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileVisible, setMobileVisible] = useState(false);
  return (
    <div className="border-b-2 border-b-[#08c] absolute left-0 right-0 md:sticky top-0 z-10">
      <Container variant="gray" className="">
        <header className="min-h-[74px] h-[74px] flex-col md:flex-row md:h-20 flex md:items-center justify-between ">
          <div className="flex items-center flex-1">
            <div className="">
              <Link href="/" className="">
                <Image
                  src={"/images/logo.png"}
                  height={56}
                  width={56}
                  alt="Logo"
                  className="w-auto h-14 transition-transform hover:scale-95"
                />
              </Link>
            </div>
            <div className="flex md:hidden items-center justify-end flex-1 min-h-[74px]">
              <button
                className="h-fit flex w-10 flex-col gap-1 px-3 py-2 bg-[#808080] rounded-sm"
                onClick={() => setMobileVisible(!mobileVisible)}
              >
                <div className="h-[2px] w-full bg-white" />
                <div className="h-[2px] w-full bg-white" />
                <div className="h-[2px] w-full bg-white" />
              </button>
            </div>
          </div>

          <Menu mobileVisible={mobileVisible} />
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
