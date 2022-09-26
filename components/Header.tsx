import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import InteliBlockchain from "../assets/InteliBlockchain.jsx";
// import { motion } from "framer-motion"

type Props = {
  selectedPage?: string;
};

const Header = ({ selectedPage }: Props) => {
  return (
    <header className="flex-1 w-full py-8 px-4 lg:px-2 justify-center items-center">
      <nav className="p-2 justify-between w-full md:w-5/6 mx-auto flex flex-col md:flex-row items-center">
        <Link href="/">
          <InteliBlockchain width={280} classname="w-full md:w-1/4" />
        </Link>

        <div className="w-full md:w-3/5 flex justify-evenly montserrat font-semibold text-md items-center md:mt-0 mt-6">
          <Link href="/">
            <a
              className={`${
                selectedPage == "Home" ? "border-b-orange-400 border-b-2" : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a
              className={`${
                selectedPage == "Sobre nós"
                  ? "border-b-orange-400 border-b-2"
                  : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Sobre nós
            </a>
          </Link>

          <Link href="/projects">
            <a
              className={`${
                selectedPage == "Projetos"
                  ? "border-b-orange-400 border-b-2"
                  : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Projetos
            </a>
          </Link>

          <Link href="/hackathon">
            <a
              className={`${
                selectedPage == "Hackathon"
                  ? "border-b-orange-400 border-b-2"
                  : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Hackathon
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={`${
                selectedPage == "Contato"
                  ? "border-b-orange-400 border-b-2"
                  : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Contato
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
