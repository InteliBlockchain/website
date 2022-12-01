import Link from 'next/link';
import axios from '../axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { adminModel } from '@typescript/types';
import { useCookies } from 'react-cookie';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Github from '@assets/Github';
import Linkedin from '@assets/Linkedin';

import { GetServerSideProps } from 'next';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

// require('dotenv').config()

const Admin = () => {
  const [data, setData] = useState([]);
  const [alreadyMailed, setAlreadyMailed] = useState(false);
  const [cookie, setCookie] = useCookies(['token']);
  const { register, handleSubmit, watch, reset } = useForm<adminModel>();
  const [buttonText, setButtonText] = useState('Enviar');
  const [disable, setDisabled] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: adminModel) => {
    setDisabled(true);
    setButtonText('Enviando...');

    // checks if the data is valid
    if (!data) {
      toast.warn('Preencha todos os campos!');
      setDisabled(false);
      setButtonText('Enviar');
      return;
    }

    try {
      const response = await axios.post(`/Admin/callAdm`, {
        email: data.email
      });
      setAlreadyMailed(true);
      setDisabled(false);
      setButtonText('Enviar');
      toast.success('Mensagem Enviada com sucesso! Verifique seu email');
    } catch (err) {
      toast.error('Erro ao realizar envio.\nErro: ' + err.response.data);
      setDisabled(false);
      setButtonText('Enviar');
    }
  };

  const onSubmitToken = async (data: adminModel) => {
    setDisabled(true);
    setButtonText('Enviando...');

    // checks if the data is valid
    if (!data) {
      toast.warn('Preencha todos os campos!');
      setDisabled(false);
      setButtonText('Enviar');
      return;
    }

    setCookie('token', data.token);
    toast.success('Cookie definido com sucesso');
    setTimeout(() => {
      router.push(`/admin`);
    }, 2000);
  };

  const loadSubscriptions = async () => {};

  useEffect(() => {}, []);

  const onReload = async () => {};

  const deleteSub = async (id: string) => {};

  return (
    <Layout title="Admin - Validação">
      <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto inset-0">
        {/* Div 1 - Text */}
        <div className="justify-center pt-8 md:pt-15 md:fixed w-full md:w-1/2 lg:w-5/12 md:left-8 lg:left-32 mb-8 md:mb-0 px-2">
          <div className="md:mx-6 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left text-6xl md:text-7xl">
              Inscritos{' '}
              <span className="montserrat text-gradient font-bold">
                no processo seletivo 2022.2
              </span>
            </p>
          </div>
        </div>

        {/* Div 2 - Image */}
        <div className="md:justify-items-center md:pt-8 md:absolute md:right-8 lg:right-32 mx-2 md:mx-0 montserrat md:w-5/12">
          <form className="mx-2 md:mx-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <p className="font-semibold text-lg text-gradient">
              Insira seu email:
            </p>
            {/* {errors?.github && <p className="text-sm text-red-700">{errors.github.message}</p>} */}
            <input
              type="text"
              placeholder="Seu Email"
              disabled={alreadyMailed}
              {...register('email', { required: false })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            {!alreadyMailed && (
              <div className="flex flex-col items-center">
                <button
                  className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-3/4 mb-16 ${
                    disable
                      ? 'cursor-not-allowed bg-red-600 text-white'
                      : 'bg-gradient'
                  }`}
                  disabled={disable}
                >
                  <input type="submit" value={buttonText} />
                </button>
              </div>
            )}
          </form>
          <form
            className="mx-2 md:mx-4 mt-4"
            onSubmit={handleSubmit(onSubmitToken)}
          >
            {alreadyMailed && (
              <p className="font-semibold text-lg text-gradient">
                Insira o token recebido:
              </p>
            )}
            {alreadyMailed && (
              <input
                type="text"
                placeholder="Seu Email"
                {...register('token', { required: false })}
                className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
              />
            )}

            {alreadyMailed && (
              <div className="flex flex-col items-center">
                <button
                  className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-3/4 mb-16 ${
                    disable
                      ? 'cursor-not-allowed bg-red-600 text-white'
                      : 'bg-gradient'
                  }`}
                  disabled={disable}
                >
                  <input type="submit" value={buttonText} />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
