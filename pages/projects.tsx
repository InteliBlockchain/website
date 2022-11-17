import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { CardProps } from '@typescript/interfaces';

import useTranslation from 'next-translate/useTranslation';

const Card = ({
  title,
  desc = '',
  link = 'https://github.com/InteliBlockchain'
}: CardProps) => {
  return (
    <Link href={link}>
      <a
        target="_blank"
        className="rounded-lg border px-4 py-24 border-neutral-600 mt-4 md:mt-0 montserrat md:w-full w-10/12 hover:scale-105 transform transition duration-500 ease-in-out bg shadow-lg"
      >
        <div className="my-auto flex flex-col justify-between">
          <p className="font-bold text-2xl text-center">{title}</p>

          <p className="text-lg text-center">{desc}</p>
        </div>
      </a>
    </Link>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    setProjects([
      {
        title: 'Inteli ID',
        description: t('common:projectDescription1'),
        link: 'https://github.com/InteliBlockchain/projeto_inteli'
      },
      {
        title: 'Our Neighbours',
        description: t('common:projectDescription2'),
        link: 'https://our-neighbors.herokuapp.com/'
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
            {t('common:projects')}
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
