import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  selectedPage?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const pages = [
    { title: "Home", selected: true, path: "/" },
    { title: "Sobre nós", selected: false, path: "/about" },
    { title: "Projetos", selected: false, path: "/projects" },
    { title: "Hackathon", selected: false, path: "/hackathon" },
    { title: "Contato", selected: false, path: "/contact" },
  ];
  
  return (
    <div className="flex-1 w-full h-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header pages={pages} />

      {children}

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
