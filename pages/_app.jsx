// import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/globals.css";

require("dotenv").config();

import Maintenance from "../components/Maintenance";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  // return <Maintenance />;
};

export default MyApp;
