import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import InteliBlockchain from "../assets/InteliBlockchain.jsx";

interface page {
  title: string;
  path: string;
  selected: boolean;
}

type Props = {
  pages: page[];
};

const Header = ({ pages }: Props) => {
  return (
    <header className="flex-1 w-full py-8 px-4 lg:px-2">
      <nav className="p-2 justify-between w-full flex flex-row items-center">
        <Link href="/">
          <InteliBlockchain width={280} classname="w-1/4" />
        </Link>

        <div className="w-3/5 flex justify-around montserrat font-medium text-lg items-center">
          {pages.map(({title, selected, path}) => (
            <Link href={path}>
              <a
                className={`${
                  selected ? "border-b-orange-400 border-b-2" : ""
                }`}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
