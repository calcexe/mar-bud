import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Montserrat, Lato } from "@next/font/google";

// const montserrat = Montserrat({
//   weight: "700",
//   adjustFontFallback: false,
//   fallback: ["Helvetica", "sans-serif"],
//   display: "block",
// });
// const lato = Lato({
//   weight: ["400", "700"],
//   adjustFontFallback: false,
//   fallback: ["Helvetica", "sans-serif"],
//   display: "block",
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
