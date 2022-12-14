import Head from 'next/head';
import Layout from './Layout';
import Image from 'next/image';
import MaintenanceIcon from '@assets/optimize.png';

const Maintenance = () => {
  return (
    <Layout title="Em manutenção">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-center">
          Estamos em manutenção
        </h1>
        <p className="text-center">
          Estamos trabalhando para melhorar a experiência de vocês. Volte em
          breve!
        </p>
        <Image src={MaintenanceIcon} alt="Em manutenção" className="mt-8" />
      </div>
    </Layout>
  );
};

export default Maintenance;
