import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import Header from "../components/Header";
import Layout from "../components/Layout";

type FormValues = {
  name: string;
  email: string;
  bornDate: string;
  github: string;
  linkedin?: string;
};

const SelectiveProcess = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  // const onSubmit = (data: any) => console.log(data);
  const onSubmit = (data: any) => {
    onSubmitForm(data);
  };

  const [disable, setDisabled] = useState(false);

  const loadSubscriptions = async () => {
    const response = await axios.get("http://localhost:5500/subs/get");
    
    setDisabled(false);
    return response.data;
  };

  const onSubmitForm = async (data: any) => {
    setDisabled(true);
    // first check if the email is already registered
    const registeredSubs = await loadSubscriptions();

    const isRegistered = registeredSubs.find(
      (sub: any) => sub.email === data.email
    );

    if (isRegistered) {
      alert("Email já cadastrado");
      return;
    }

    const response = await axios.post("http://localhost:5500/subs/add", {
      name: data.name,
      email: data.email,
      bornDate: data.bornDate,
      github: data.github,
      linkedin: data.linkedin,
    });
    console.log(response.data);
    setDisabled(false);
  };

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="processo-seletivo" />

      <div className="flex flex-col md:flex-row py-2 justify-around mb-8 w-full lg:w-5/6 mx-auto">
        {/* Div 1 - Text */}
        <div className="justify-center pt-8 md:pt-48 md:fixed w-full md:w-1/2 lg:w-5/12 md:left-8 lg:left-32 mb-8 md:mb-0 px-2">
          <div className="text-6xl md:text-8xl md:mx-6 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left">
              Processo{" "}
              <span className="montserrat text-gradient font-bold">
                seletivo 2022.2
              </span>
            </p>
          </div>

          <div className="text-6xl md:text-7xl md:mx-6 items-center mt-8">
            <p className="montserrat text-lg text-zinc-800">
              Participe do processo seletivo do Inteli Blockchain e tenha a
              oportunidade de aprender mais sobre o mundo da tecnologia
              Blockchain e participar dos projetos do clube!
            </p>
          </div>
        </div>

        {/* Div 2 - Form */}
        <div className="md:justify-items-center md:pt-8 md:absolute md:right-8 lg:right-32 mx-2 md:mx-0 montserrat md:w-5/12">
          <div className="text-6xl md:text-7xl md:mx-4 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left">
              Realize sua inscrição
            </p>
          </div>

          <p>{data}</p>

          <form className="mx-2 md:mx-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <p className="font-semibold text-lg text-gradient">
              Seu nome completo: *
            </p>
            {/* {errors?.name && <p className="text-sm text-red-700">{errors.name.message}</p>} */}
            <input
              type="text"
              placeholder="Nome completo"
              {...register("name", { required: true, maxLength: 100 })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">Email: *</p>
            {/* {errors?.email && <p className="text-sm text-red-700">{errors.email.message}</p>} */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Data de nascimento: *
            </p>
            {/* {errors?.bornDate && <p className="text-sm text-red-700">{errors.bornDate.message}</p>} */}
            <input
              type="date"
              placeholder="Data de nascimento"
              {...register("bornDate", {
                required: true,
                pattern: /^\d{4}-\d{2}-\d{2}$/i,
              })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
              pattern="\d{2}/\d{2}/\d{4}"
            />

            <p className="font-semibold text-lg text-gradient">
              Link do seu Github: *
            </p>
            {/* {errors?.github && <p className="text-sm text-red-700">{errors.github.message}</p>} */}
            <input
              type="text"
              placeholder="Seu github"
              {...register("github", { required: true })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Link do seu Linkedin:
            </p>
            <input
              type="text"
              placeholder="Seu linkedin"
              {...register("linkedin", { required: false })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-16"
            />

            <div className="flex flex-col items-center">
              <button
                className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-3/4 ${disable ? "cursor-not-allowed bg-grey-500" : "bg-gradient"}`}
                disabled={disable}
              >
                <input type="submit" value="Enviar" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SelectiveProcess;
