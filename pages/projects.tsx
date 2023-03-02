import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { CardProps } from '@typescript/interfaces';

import healthVault from '../assets/health-vault.jpeg'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const Card = ({
  title,
  description = '',
  link = 'https://github.com/InteliBlockchain',
  imageUri
}: CardProps) => {
  return (
    <Link href={link}>
      <a target={'_blank'} className="flex flex-col items-center justify-center w-full h-full rounded-xl shadow-md bg-white hover:scale-105 transform transition duration-300 ease-in-out hover:z-10">
        <div className="w-full h-full rounded overflow-hidden shadow-lg">
          {imageUri && imageUri != "" ?
            <div className="w-full flex justify-center">
              <Image
                loader={({ src }) => src}
                src={imageUri}
                alt={title}
                width={500}
                height={300}
              />
            </div>
            : null}
          <div className="px-4 py-2">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const [projects, setProjects] = useState<CardProps[]>([
    {
      title: 'Inteli ID',
      link: 'https://github.com/InteliBlockchain/projeto_inteli',
      description: t('common:projectDescription1'),
      imageUri: "https://github.com/InteliBlockchain/website/blob/main/assets/projeto-inteli-blockchain.png?raw=true"
    },
    {
      title: 'Our Neighbours',
      link: 'https://github.com/lyorrei/inteli_blockchain_hackaton',
      description: t('common:projectDescription2'),
      imageUri: "https://github.com/InteliBlockchain/website/blob/main/assets/our-neighbors.png?raw=true"
    },
    {
      title: "Snack Fair",
      link: "https://github.com/lyorrei/snack-fair",
      description: t('common:projectDescription3'),
      imageUri: "https://github.com/InteliBlockchain/website/blob/main/assets/snack-fair.png?raw=true"
    },
    {
      title: 'Health Vault',
      link: 'https://github.com/InteliBlockchain/HealthVault',
      description: t('common:projectDescription4'),
      imageUri: 'https://github.com/InteliBlockchain/website/blob/main/assets/health-vault.jpeg?raw=true'
    },
  ]);

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Projetos" />

      <div className="flex flex-col pt-8 p-2 mb-8 w-full lg:w-5/6 mx-auto">
        <div className="text-6xl md:text-7xl md:mb-8 p-0 mb-4">
          <p className="montserrat text-gradient font-bold text-left">
            {t('common:projects')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 justify-items-center">
          {projects.map(project => (
            <Card
              title={project.title}
              description={project.description}
              link={project.link}
              imageUri={project.imageUri}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
