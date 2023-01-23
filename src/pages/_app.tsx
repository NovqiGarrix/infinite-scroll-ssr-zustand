import "../styles/globals.css";
import type { AppProps } from "next/app";
import { hydrateMovies } from "../hooks/useMovies";

function MyApp({ Component, pageProps }: AppProps) {
  const { movies, info } = pageProps;
  hydrateMovies({ data: movies, info });
  return <Component {...pageProps} />;
}

export default MyApp;
