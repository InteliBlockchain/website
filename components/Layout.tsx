import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  selectedPage?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <div className="flex-1 w-full h-full pb-8">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
