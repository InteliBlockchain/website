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
  const [projects, setProjects] = useState<CardProps[]>([
    {
      title: 'Inteli ID',
      link: 'https://github.com/InteliBlockchain/projeto_inteli',
      description:
        'Já pensou como seria ter todo seu currículo de estudante em uma blockchain? Esse foi o projeto realizado com a parceria do Inteli',
      imageUri: "https://github.com/InteliBlockchain/InteliBlockchain/blob/main/assets/projeto-inteli-blockchain.png"
    },
    {
      title: 'Our Neighbours',
      link: 'https://github.com/lyorrei/inteli_blockchain_hackaton',
      description:
        'Fazer doações para outro país parece meio enviável...certo? Errado! Com o Our Neighbours, projeto desenvolvido no hackathon Ethereum SP, isso se tornou mais fácil e prático. ',
      imageUri: "https://raw.githubusercontent.com/InteliBlockchain/HealthVault/main/our-neighbors.jpeg"
    },
    {
      title: "Snack Fair",
      link: "https://github.com/lyorrei/snack-fair",
      description: "Durante a pandemia houve um crescimento exponencial dos aplicativos de entrega de comida no Brasil. Descubra como resolvemos esse problema com o Snack Fair.",
      imageUri: "https://raw.githubusercontent.com/InteliBlockchain/HealthVault/main/snack-fair.jpeg"
    },
    {
      title: 'Health Vault',
      link: 'https://github.com/InteliBlockchain/health-vault',
      description: 'Health Vault é um sistema web conectado com a blockchain que busca facilitar o registro de informações de saúde de forma segura.',
      imageUri: 'https://raw.githubusercontent.com/InteliBlockchain/HealthVault/main/healthvault.jpeg'
    }
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
