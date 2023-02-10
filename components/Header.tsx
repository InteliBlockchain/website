import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteliBlockchain from '@assets/InteliBlockchain.jsx';
import { HeaderProps } from '@typescript/types';

import useTranslation from 'next-translate/useTranslation';

const Header = ({ selectedPage }: HeaderProps) => {

  const { t } = useTranslation();

  return (
    <header className="flex-1 w-full py-4 lg:px-2 justify-center items-center fixed top-0 z-50 bg">
      <nav className="p-2 w-full md:w-5/6 mx-auto flex flex-col justify-between md:flex-row items-center">
        <Link href="/">
          <a>
            <InteliBlockchain width={320} />
          </a>
        </Link>

        <div className="flex montserrat font-semibold text-md items-center md:mt-0 mt-6 text-sm md:text-lg">
          <Link href="/">
            <a
              className={`${selectedPage == 'Home' ? 'border-b-orange-400 border-b-2' : ''
                } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear`}
            >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a
              className={`${selectedPage == 'Sobre nós'
                ? 'border-b-orange-400 border-b-2'
                : ''
                } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear ml-4 md:ml-8`}
            >
              {t('common:about')}
            </a>
          </Link>

          <Link href="/projects">
            <a
              className={`${selectedPage == 'Projetos'
                ? 'border-b-orange-400 border-b-2'
                : ''
                } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear ml-4 md:ml-8`}
            >
              {t('common:projects')}
            </a>
          </Link>

          {/* <Link href="/processo-seletivo">
            <a
              className={`${
                selectedPage == "processo-seletivo"
                  ? "border-b-orange-400 border-b-2"
                  : ""
              } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear ml-4 md:ml-8`}
            >
              Processo seletivo
            </a>
          </Link> */}

          <Link href="/contact">
            <a
              className={`${selectedPage == 'Contato'
                ? 'border-b-orange-400 border-b-2'
                : ''
                } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear ml-4 md:ml-8`}
            >
              {t('common:contact')}
            </a>
          </Link>
          <Link href="/hackaton">
            <a
              className={`${selectedPage == 'Hackaton'
                ? 'border-b-orange-400 border-b-2'
                : ''
                } hover:border-b-orange-400 hover:border-b-2 transition duration-200 ease-linear ml-4 md:ml-8`}
            >
              {t('Hackaton')}
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
