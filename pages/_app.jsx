import React from "react";
// import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/globals.css";

require("dotenv").config();

import Maintenance from "../components/Maintenance";

const MyApp = ({ Component, pageProps }) => {
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "false" ? (
    <Component {...pageProps} />
  ) : (
    <Maintenance />
  );
};

export default MyApp;
