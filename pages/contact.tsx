// import Image from 'next/image';
// import Header from '@components/Header';
// import Layout from '@components/Layout';
// import Link from 'next/link';
// import instagram from 'assets/instagram.png';
// import email from 'assets/email.png';
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from '../axios';
// import { useRouter } from 'next/router';
// import { dataModelContact } from '@typescript/types';
// import { GetServerSideProps } from 'next';
// import { toast } from 'react-toastify';
// import { useRecaptcha } from 'react-hook-recaptcha';

// const Contact = () => {
//   const { register, handleSubmit, watch, reset } = useForm<dataModelContact>();

//   const router = useRouter();

//   const [isDone, setIsDone] = useState('🔲');

//   const [data, setData] = useState('');
//   const [buttonText, setButtonText] = useState('Enviar');
//   const [disable, setDisabled] = useState(false);

//   useEffect(() => {
//     const defaultForm = {
//       name: '',
//       email: '',
//       bodyEmail: ''
//     };

//     if (localStorage.getItem('form')) {
//       const form = JSON.parse(
//         localStorage.getItem('form') || JSON.stringify(defaultForm)
//       );
//       reset(form);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('form', JSON.stringify(watch()));
//   }, [watch()]);

//   const onSubmit = async (data: dataModelContact) => {
//     setDisabled(true);
//     setButtonText('Enviando...');

//     // checks if the data is valid
//     if (!data) {
//       toast.warn('Preencha todos os campos!');
//       setDisabled(false);
//       setButtonText('Enviar');
//       return;
//     }

//     try {
//       const response = await axios.post(`/Subscription/continue`, {
//         name: data.name,
//         email: router.query.email,
//         bodyEmail: data.bodyEmail,
//         token: router.query.token
//       });

//       toast.success('Inscrição realizada com sucesso! Redirecionando...');
//       setIsDone('✅');
//       setTimeout(() => {
//         router.push('/');
//       }, 1500);
//     } catch (err) {
//       toast.error(
//         'Erro ao realizar inscrição! Tente novamente mais tarde.\nErro: ' +
//         err.response.data +
//         '\n\n\nSe não tiver se cadastrado, vá para a Home e tente novamente.'
//       );
//       setDisabled(false);
//       setButtonText('Enviar');
//     }
//   };
//   return (
//     <Layout title="Inteli Blockchain">
//       <Header selectedPage="Contato" />
//       <div className="text-center">
//         <h1 className="pt-14 montserrat text-gradient font-bold text-8xl">
//           Contato
//         </h1>
//         <p className="text-2xl p-3 montserrat mb-10">
//           Fale conosco e siga-nos nas redes sociais!
//         </p>
//         <Image src={instagram} width={50} height={50}></Image>
//         <Link href={'https://www.instagram.com/inteli_blockchain/'}>
//           <p className=" transition text-4xl  montserrat hover:cursor-pointer hover:scale-110">
//             @inteli_blockchain
//           </p>
//         </Link>
//         <br />
//         <br />
//         <br />
//         <Image src={email} width={50} height={50}></Image>
//         <p className="text-3xl  montserrat">blockchain+contato@inteli.edu.br</p>


//         <form className="mx-2 md:mx-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
//             <p className="font-semibold text-lg text-gradient">
//               Seu nome completo: *
//             </p>
//             {/* {errors?.name && <p className="text-sm text-red-700">{errors.name.message}</p>} */}
//             <input
//               type="text"
//               placeholder="Nome completo"
//               {...register('name', { required: true, maxLength: 100 })}
//               className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
//             />

//             {/* <p className="font-semibold text-lg text-gradient">Email: *</p> */}
//             {/* {errors?.email && <p className="text-sm text-red-700">{errors.email.message}</p>} */}
//             {/* <input
//               type="email"
//               placeholder="Email"
//               value={
//                 router.query.email ? router.query.email.toString() : undefined
//               }
//               disabled={true}
//               {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
//               className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
//             /> */}


//             <p className="font-semibold text-lg text-gradient">
//               Insira seu e-mail:
//             </p>
//             <input
//               type="email"
//               placeholder="Email"
//               {...register('email', { required: true })}
//               className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
//             />

//             <p className="font-semibold text-lg text-gradient">
//               Insira o texto que deseja enviar:
//             </p>
//             <textarea
//               placeholder="Exemplo: Gostaria de firmar uma parceria com o InteliBlockchain..."
//               {...register('bodyEmail', { required: true })}
//               className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
//             />


//             <div className="flex flex-col items-center">
//               <button
//                 className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-3/4 mb-16 ${disable
//                     ? 'cursor-not-allowed bg-red-600 text-white'
//                     : 'bg-gradient'
//                   }`}
//                 disabled={disable}
//               >
//               <reCAPTCHA />
//                 <input type="submit" value={buttonText} />
//               </button>
//             </div>
//           </form>

//       </div>
//     </Layout>
//   );
// };

// export default Contact;
