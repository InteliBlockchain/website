import Link from 'next/link';
import axios from '../axios';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Github from '@assets/Github';
import Linkedin from '@assets/Linkedin';

import { GetServerSideProps } from 'next';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

// require('dotenv').config()

const Admin = () => {
  const [data, setData] = useState([]);
  const [cookie, setCookie] = useCookies(['token']);

  const loadSubscriptions = async () => {
    try {
      const response = await axios.get(`/Admin/getSubs/${cookie.token}`);
      setData(response.data);
    } catch (err) {
      toast.error('Erro ao carregar inscrições.');
    }

    return data;
  };

  useEffect(() => {
    loadSubscriptions();

  }, []);
  console.log(data[0]);

  const onReload = async () => {};

  const deleteSub = async (id: string) => {};

  return (
    <Layout title="Admin">
      <div className="flex flex-col p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto">
        <div className="grid grid-col-1 justify-items-center md:pt-24 montserrat">
          <div className="md:mx-6 md:mt-2 items-center mb-16">
            <p className="font-bold text-zinc-800 montserrat text-left text-6xl md:text-7xl">
              Inscritos{' '}
              <span className="montserrat text-gradient font-bold">
                no processo seletivo 2022.2
              </span>
            </p>
          </div>

          {data.length > 0 ? (
            data.map(
              (sub: {
                _id: string;
                name: string;
                email: string;
                bornDate: string;
                github?: string;
                linkedin?: string;
                skills: string;
                why: string;
                about: string;
                subscriptionId: string;
              }) => (
                <div
                  className="flex flex-col mb-8 w-full md:w-4/5 shadow-xl p-4 bg-white rounded-lg"
                  key={sub.subscriptionId}
                >
                  <p className="text-xl font-bold text-zinc-800 mb-4">
                    {sub.name},{' '}
                    <span className="text-lg font-normal text-zinc-800">
                      {sub.email}
                    </span>
                  </p>

                  <p className="text-md text-zinc-800 mb-4">
                    <b>Data de nascimento:</b>{' '}
                    {new Date(sub.bornDate).toLocaleDateString('pt-BR')} |{' '}
                    {new Date().getFullYear() -
                      new Date(sub.bornDate).getFullYear()}{' '}
                    anos
                  </p>

                  <p className="text-md text-zinc-800 mb-4">
                    <b>Habilidades:</b>
                    <br />
                    {sub.skills}
                  </p>

                  <p className="text-md text-zinc-800 mb-4">
                    <b>Por que quer participar do clube?:</b>
                    <br />
                    {sub.why}
                  </p>

                  <p className="text-md text-zinc-800 mb-4">
                    <b>Conte-nos um pouco sobre você:</b>
                    <br />
                    {sub.about}
                  </p>

                  <div className="text-md text-zinc-800 flex flex-row">
                    {sub.github ? (
                      <a href={sub.github} target="_blank" className="mr-4">
                        <Github />
                      </a>
                    ) : null}
                    {sub.linkedin ? (
                      <a href={sub.linkedin} target="_blank">
                        <Linkedin />
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            )
          ) : (
            <p>Não há inscritos</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ctx => {
  let cookieToken = ctx.req.cookies['token'];

  console.log(cookieToken);

  const redirect = (errorMessage: string) => {
    ctx.res.writeHead(301, {
      Location: '/?tokenError=true&errorMessage=' + errorMessage
    });
    ctx.res.end();
    // Pass data to the page via props
    return;
  };

  // try {
  //   await axios.get(`/Subscription/admin/${cookieToken}`);
  // } catch (err) {
  //   redirect(err.response.data);
  // }

  // Pass data to the page via props
  return { props: {} };
};

export default Admin;
