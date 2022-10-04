import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  selectedPage?: string;
  hide?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  hide = false,
}: Props) => {
  return (
    <div className="flex-1 w-full h-full md:pb-8">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="md:mt-24 mt-32">{children}</div>

      <Footer hide={hide} />
    </div>
  );
};

export default Layout;
