import Image from 'next/image';
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

const Card = ({
    title,
    image
  }: SponsorsProps) => {

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Hackaton" />
      <div className="text-center">
        <h1 className="pt-14 montserrat text-gradient font-bold text-8xl">
          Hackaton Inteli Blockchain
        </h1>
        
        
      </div>
    </Layout>
  );
};

export default Hackaton;
