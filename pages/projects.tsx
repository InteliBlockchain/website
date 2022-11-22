import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { CardProps } from '@typescript/interfaces';

import healthVault from '../assets/health-vault.jpeg'
import Image from 'next/image';

const Card = ({
  title,
  desc = '',
  link = 'https://github.com/InteliBlockchain',
  image
}: CardProps) => {
  return (
    <Link href={link}>
      <a target={'_blank'} className="flex flex-col items-center justify-center w-full h-full rounded-lg shadow-lg bg-white hover:scale-105 transform transition duration-300 ease-in-out hover:z-10">
      <div className="w-full h-full rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={healthVault}
          alt={title}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
      </div>
      </a>
    </Link>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setProjects([
      {
        title: 'Inteli ID',
        description:
          'Já pensou como seria ter todo seu currículo de estudante em uma blockchain? Esse foi o projeto realizado com a parceria do Inteli',
        link: 'https://github.com/InteliBlockchain/projeto_inteli',
        image: healthVault
      },
      {
        title: 'Our Neighbours',
        description:
          'Fazer doações para outro país parece meio enviável...certo? Errado! Com o Our Neighbours, projeto desenvolvido no hackathon Ethereum SP, isso se tornou mais fácil e prático. ',
        link: 'https://our-neighbors.herokuapp.com/',
        image: healthVault
      },
      {
        title: 'Em breve...',
        description: 'Mais projetos estão por vir!'
      }
    ]);
  }, []);

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Projetos" />

      <div className="flex flex-col pt-8 p-2 mb-8 w-full lg:w-5/6 mx-auto">
        <div className="text-6xl md:text-7xl md:mb-8 p-0 mb-4">
          <p className="montserrat text-gradient font-bold text-left">
            Projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 justify-items-center">
          {projects.map(project => (
            <Card
              title={project.title}
              desc={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
