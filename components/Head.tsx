import React, { FunctionComponent } from "react";
import NextHead from "next/head";

type PageType = "home" | "about" | "gallery" | "contact";

type HeadProps = {
  page: PageType;
};

const getPageTitle = (page: PageType) => {
  if (page === "home")
    return "MAR-BUD – Firma Remontowo-Budowlana z Małopolski";
  let pageTitle = "";
  switch (page) {
    case "about":
      pageTitle = "O nas";
      break;
    case "contact":
      pageTitle = "Kontakt";
      break;
    case "gallery":
      pageTitle = "Galeria";
      break;
  }
  return `${pageTitle} – MAR-BUD`;
};

const Head: FunctionComponent<HeadProps> = ({ page }) => {
  return (
    <NextHead>
      <title>{getPageTitle(page)}</title>
      <meta
        name="description"
        content="Jeśli szukasz solidnej firmy, która wykona dla Ciebie wszelkie prace remontowe, budowlane oraz wykończeniowe, to nie musisz szukać dalej!"
      />
      <meta
        name="og:description"
        content="Jeśli szukasz solidnej firmy, która wykona dla Ciebie wszelkie prace remontowe, budowlane oraz wykończeniowe, to nie musisz szukać dalej!"
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
