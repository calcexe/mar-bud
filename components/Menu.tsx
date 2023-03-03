import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import AnimateHeight from "react-animate-height";
import Link from "./Link";

const ActivePathIndicator: FunctionComponent<{ active: boolean }> = ({
  active,
}) => (
  <div
    className={clsx(
      "absolute left-0 right-0 -bottom-1 h-[2px] bg-[#08c]",
      "md:left-1 md:right-1 md:-bottom-1",
      active ? "bg-[#08c]" : "bg-white",
      active ? "md:block" : "md:hidden"
    )}
  />
);

const MenuItem: FunctionComponent<{ path: string; title: string }> = ({
  path,
  title,
}) => {
  const { pathname } = useRouter();
  return (
    <li className={clsx("relative flex")}>
      <Link href={path} variant="white" className="text-sm">
        {title}
      </Link>
      <ActivePathIndicator
        active={path === "/" ? path === pathname : pathname.includes(path)}
      />
    </li>
  );
};

const BaseMenu = () => (
  <ul
    className={clsx("flex-col mb-8 md:mb-0 md:flex-row flex gap-5 justify-end")}
  >
    <MenuItem path="/" title="Strona główna" />
    <MenuItem path="/o-nas" title="O nas" />
    <MenuItem path="/galeria" title="Galeria" />
    <MenuItem path="/kontakt" title="Kontakt" />
  </ul>
);

type MenuProps = {
  mobileVisible: boolean;
};

const Menu: FunctionComponent<MenuProps> = ({ mobileVisible }) => {
  return (
    <div className="justify-center items-center">
      <div className="bg-[#292929]">
        <AnimateHeight
          className={clsx("md:hidden")}
          height={mobileVisible ? "auto" : 0}
        >
          <BaseMenu />
        </AnimateHeight>
      </div>
      <div className="hidden md:block">
        <BaseMenu />
      </div>
    </div>
  );
};

export default Menu;
