import Link from 'next/link';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { UserProps } from '@typescript/interfaces';

import useTranslation from 'next-translate/useTranslation';

const User = ({ id, name }: UserProps) => {


  return (
    <Link href={`https://github.com/${name}`}>
      <a target="_blank">
        <div className="text-center hover:scale-110 transform transition duration-500 ease-in-out mb-2">
          <img
            src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
            width={200}
            height={200}
            className="rounded-full shadow-md"
          />

          <p className="montserrat text-lg mt-2">{name}</p>
        </div>
      </a>
    </Link>
  );
};

const About = () => {
  const { t } = useTranslation();

  const users = [
    { name: 'AbnerSilvaBarbosa', id: '99296562' },
    { name: 'Bianca-Cassemiro', id: '99203402' },
    { name: 'luiz-k-alencar', id: '68920578' },
    { name: 'lyorrei', id: '44589251' },
    { name: 'marcelofeitoza', id: '71825192' },
    { name: 'mflorencio-inteli', id: '99209916' },
    { name: 'paulo-evangelista', id: '99093520' },
    { name: 'PedroHaggeBaptista', id: '99206621' },
    { name: 'vict0rcarvalh0', id: '99208741' },
    { name: 'Lemos1347', id: '99190347' },
    { name: 'joaocarazzato', id: '99187756' },
    { name: 'henriquemarlon', id: '89201795' }
  ];

  return (
    <Layout title="Inteli Blockchain" hide={true}>
      <Header selectedPage="Sobre nós" />

      <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto">
        {/* Div 1 - Text */}
        <div className="justify-center pt-8 md:pt-64 md:fixed w-full md:w-1/2 lg:w-5/12 md:left-8 lg:left-32 mb-8 md:mb-0 px-2">
          <div className="text-6xl md:text-8xl md:mx-6 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left">
              {t('common:about1')}{' '}
              <span className="montserrat text-gradient font-bold">{t('common:about2')}</span>
            </p>
          </div>

          <div className="text-6xl md:text-7xl md:mx-6 items-center mt-8">
            <p className="montserrat text-lg text-zinc-800">
              {t('common:description')}
            </p>
          </div>
        </div>

        {/* Div 2 - Image */}
        <div className="grid grid-col-2 justify-items-center lg:grid-cols-2 md:grid-rows-2 md:gap-4 md:pt-64 md:absolute md:right-8 lg:right-32 px-2 montserrat md:w-5/12">
          {/* mx-auto justify-items-center montserrat md:absolute w-full md:w-5/12 md:right-32 border border-black">  */}
          {users.map(user => (
            <User name={user.name} id={user.id} key={user.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
