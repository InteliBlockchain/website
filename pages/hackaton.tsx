import Header from '@components/Header';
import Layout from '@components/Layout';
import Link from 'next/link';
import instagram from 'assets/instagram.png';
import email from 'assets/email.png';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../axios';
import { useRouter } from 'next/router';
import { dataModelContact } from '@typescript/types';
import { GetServerSideProps } from 'next';
import { toast } from 'react-toastify';
import { SponsorsProps } from '@typescript/interfaces';

const Hackaton = ({
  title,
  image
}: SponsorsProps) => {

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Hackaton" />
      <div className="text-center">
        <h1 className="challengeText montserrat">
          Challenge
        </h1>
        <h3 className="btgText montserrat">
          Break The Ground
        </h3>
        <h2 className="apoioHacka montserrat">
          Apoio
        </h2>
        <h2 className="apoioHacka montserrat">
          Patrocinadores
        </h2>
      </div>
    </Layout>
  );
};

export default Hackaton;
