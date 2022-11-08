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
import { useForm } from 'react-hook-form';

type Sub = {
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
  approved?: string;
  feedback?: string;
};

const Candidate = ({
  sub,
  toggleModal,
  modalOpened
}: {
  sub: Sub;
  toggleModal: () => void;
  modalOpened: boolean;
}) => {
  return (
    <div
      className={`flex flex-col mb-8 w-full md:w-4/5 shadow-xl p-4 bg-white rounded-lg ${
        sub.approved == 'Pendente'
          ? 'border-2 border-yellow-500'
          : sub.approved == 'Aprovado'
          ? 'border-2 border-green-500'
          : 'border-2 border-red-500'
      }`}
      key={sub.subscriptionId}
    >
      <p className="text-xl font-bold text-zinc-800 mb-4">
        {sub.name},{' '}
        <span className="text-lg font-normal text-zinc-800">{sub.email}</span>
        <br />
        {sub.approved == 'Pendente' ? (
          <span className={`text-lg font-normal text-yellow-500`}>
            Em análise...
          </span>
        ) : sub.approved == 'Aprovado' ? (
          <span className={`text-lg font-normal text-green-500`}>
            Aprovado!
          </span>
        ) : (
          <span className={`text-lg font-normal text-red-500`}>Reprovado!</span>
        )}
      </p>

      <p className="text-md text-zinc-800 mb-4">
        <b>Data de nascimento:</b>{' '}
        {new Date(sub.bornDate).toLocaleDateString('pt-BR')} |{' '}
        {new Date().getFullYear() - new Date(sub.bornDate).getFullYear()} anos
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

      {sub.approved && sub.feedback && sub.approved != 'Pendente' ? (
        <>
          <p className='text-md text-zinc-800 mb-2 font-bold' >Feedback do candidato:</p>
          <div
            className={`${
              sub.approved == 'Aprovado' ? 'bg-green-100' : 'bg-red-100'
            } px-2 py-4`}
          >
            {sub.feedback}
          </div>
        </>
      ) : null}

      <div className="flex flex-row justify-center mt-4">
        <button
          className="bg-gradient w-full text-white font-bold py-2 px-4 rounded"
          onClick={() => toggleModal()}
        >
          Adicionar feedback e aprovar/reprovar
        </button>
      </div>
    </div>
  );
};

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

  const toggleModal = (sub: Sub) => {
    setIsOpened(!isOpened);
    setSub(sub);
  };

  const [isOpened, setIsOpened] = useState(false);
  const [sub, setSub] = useState<Sub>({
    _id: '',
    name: '',
    email: '',
    bornDate: '',
    skills: '',
    why: '',
    about: '',
    subscriptionId: ''
  });

  return (
    <>
      <Modal
        isOpened={isOpened}
        closeModal={() => {
          setIsOpened(false);
          setSub({
            _id: '',
            name: '',
            email: '',
            bornDate: '',
            skills: '',
            why: '',
            about: '',
            subscriptionId: ''
          });
        }}
        loadSubscriptions={() => loadSubscriptions()}
        sub={sub}
      />

      <div
        onClick={() => setIsOpened(false)}
        className={`modal absolute md:fixed w-full min-h-screen h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-70 z-20 inset-0 ${
          isOpened ? '' : 'hidden'
        }`}
      ></div>

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
              data.map((sub: Sub) => (
                <Candidate
                  sub={sub}
                  toggleModal={() => toggleModal(sub)}
                  modalOpened={isOpened}
                  key={sub.subscriptionId}
                />
              ))
            ) : (
              <p>Não há inscritos</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

const Modal = ({
  sub,
  isOpened,
  closeModal,
  loadSubscriptions
}: {
  sub: Sub;
  isOpened: boolean;
  closeModal: () => void;
  loadSubscriptions: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [cookie, setCookie] = useCookies(['token']);

  const [approve, setApprove] = useState(false);
  const [approvedFeadback, setApprovedFeadback] = useState('');
  const [reject, setReject] = useState(false);
  const [rejectedFeadback, setRejectedFeadback] = useState('');

  const onSubmit = async (data: { feedback: string }) => {
    try {
      if (approve) {
        await axios.post(`/Admin/toggleSub/${sub.subscriptionId}`, {
          feedback: data.feedback,
          token: cookie.token,
          status: 'Aprovado'
        });
        toast.success('Inscrição aprovada com sucesso!');
      } else if (reject) {
        await axios.post(`/Admin/toggleSub/${sub.subscriptionId}`, {
          feedback: data.feedback,
          token: cookie.token,
          status: 'Reprovado'
        });
        toast.success('Inscrição reprovada com sucesso!');
      }

      loadSubscriptions();
      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (err) {
      toast.error('Erro ao aprovar/reprovar inscrição.');
    }
  };

  return isOpened ? (
    <div className="z-30 top-[65%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute modal-content min-w-[40%] bg-white w-11/12 sm:w-5/6 md:w-2/3 mx-auto rounded shadow-lg py-8 text-left px-6 inset-0 h-fit mb-8">
      <div className="relative modal-header flex flex-col md:flex-row items-start md:mb-8">
        <button
          className="text-[20px] transition scale-125 hover:scale-150 text-2xl align-center cursor-pointer alert-del"
          onClick={() => {
            closeModal();
            setApprove(false);
            setReject(false);
            setApprovedFeadback('');
            setRejectedFeadback('');
          }}
        >
          &times;
        </button>
        <p className="text-3xl font-bold mb-8 sm:mb-0 sm:ml-4">
          Feedback e Aprovação/Reprovação de inscrição
        </p>
      </div>
      <div className="modal-body">
        <div className="text-3xl md:text-5xl lg:text-6xl md:my-2 items-center mb-2">
          <p className="font-bold text-zinc-800 montserrat text-left mb-8">
            <span className="montserrat text-gradient font-bold">
              {sub.name}
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between mt-4">
          <button
            className={`
                  rounded-xl border-2 border-green-700 w-[47.5%] font-bold py-2 px-4 roundedfirst-letter:
                  ${
                    approve
                      ? 'bg-green-700 text-white'
                      : 'bg-white text-green-700'
                  }
                `}
            onClick={() => {
              setApprove(true);
              setReject(false);
            }}
          >
            Aprovar
          </button>

          <button
            className={`
                  rounded-xl border-2 border-red-700 w-[47.5%] font-bold py-2 px-4 roundedfirst-letter:
                  ${reject ? 'bg-red-700 text-white' : 'bg-white text-red-700'}
                `}
            onClick={() => {
              setReject(true);
              setApprove(false);
            }}
          >
            Reprovar
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* if approve is true, show the textarea to write the feedback, if it is false, show the textarea to write the feedback */}
          {approve ? (
            <div className="flex flex-col justify-center mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="feedback"
              >
                Feedback de aprovação
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="feedback"
                placeholder="Feedback de aprovação"
                {...register('feedback', { required: true })}
                value={approvedFeadback}
                onChange={e => setApprovedFeadback(e.target.value)}
              ></textarea>
            </div>
          ) : reject ? (
            <div className="flex flex-col justify-center mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="feedback"
              >
                Feedback de reprovação
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="feedback"
                placeholder="Feedback de reprovação"
                {...register('feedback', { required: true })}
                value={rejectedFeadback}
                onChange={e => setRejectedFeadback(e.target.value)}
              ></textarea>
            </div>
          ) : null}

          <input
            className={`w-full text-white font-bold p-4 rounded mt-4 cursor-pointer ${
              reject ? 'bg-red-700' : approve ? 'bg-green-700' : 'bg-gradient'
            }`}
            type="submit"
            value="Salvar feedback"
          />
        </form>
      </div>
    </div>
  ) : null;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ctx => {
  let cookieToken = ctx.req.cookies['token'];

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
