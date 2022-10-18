import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Alert } from "../components/Alert";
import { alertService } from "../services/alert.service";
import { useRouter } from "next/router";
import { dataModel } from "../interfaces";

const SelectiveProcess = () => {
  const { register, handleSubmit } = useForm<dataModel>();
  const [data, setData] = useState("");
  const [buttonText, setButtonText] = useState("Enviar");

  const router = useRouter();

  const [disable, setDisabled] = useState(false);

  const [options, setOptions] = useState({
    autoClose: false,
    keepAfterRouteChange: false,
  });

  function handleOptionChange(e: any) {
    const { name, checked } = e.target;
    setOptions((options) => ({ ...options, [name]: checked }));
  }

  const validateToken = async () => {
    let urlToken = router.query.token;
    let urlEmail = router.query.email;

    const res = await axios.post(
      "https://blockchain-api-inteli.herokuapp.com/Subscription/token",
      {
        token: urlToken,
        email: urlEmail,
      }
    );

    console.log(res);

    if (res.data.validation) {
      alert("Token inválido");
      router.push("/");
    } else console.log("Token válido");
  };

  validateToken();

  const onSubmit = async (data: dataModel) => {
    setDisabled(true);
    setButtonText("Enviando...");

    // checks if the data is valid
    if (!data) {
      alertService.warn("Preencha todos os campos!", options);
      return;
    }

    console.log({
      name: data.name,
      email: router.query.email,
      bornDate: data.bornDate,
      github: data.github,
      linkedin: data.linkedin,
      skills: data.skills,
      why: data.why,
      about: data.about,
    });

    try {
      const response = await axios.post(
        `https://blockchain-api-inteli.herokuapp.com/Subscription/continue`,
        {
          name: data.name,
          email: router.query.email,
          bornDate: data.bornDate,
          github: data.github,
          linkedin: data.linkedin,
          skills: data.skills,
          why: data.why,
          about: data.about,
          token: router.query.token,
        }
      );

      console.log(response.data);
      alertService.success("Inscrição realizada com sucesso!", options);
      setTimeout(() => {
        router.push("/");
        alert(
          "Parabéns! Sua inscrição foi realizada com sucesso. Em breve entraremos em contato."
        );
      }, 1500);
    } catch (err) {
      console.log(err);
      alertService.warn(
        `Erro ao realizar inscrição! Tente novamente mais tarde.\nErro: ${err.data}`,
        options
      );
      setDisabled(false);
      setButtonText("Enviar");
    }
  };

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="processo-seletivo" />
      <Alert />

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
          <div className="text-5xl md:text-7xl md:mx-4 md:my-2 items-center">
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

            {/* <p className="font-semibold text-lg text-gradient">Email: *</p> */}
            {/* {errors?.email && <p className="text-sm text-red-700">{errors.email.message}</p>} */}
            {/* <input
              type="email"
              placeholder="Email"
              value={
                router.query.email ? router.query.email.toString() : undefined
              }
              disabled={true}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            /> */}

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
              Link do seu Github:
            </p>
            {/* {errors?.github && <p className="text-sm text-red-700">{errors.github.message}</p>} */}
            <input
              type="text"
              placeholder="Seu github"
              {...register("github", { required: false })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Link do seu Linkedin:
            </p>
            <input
              type="text"
              placeholder="Seu linkedin"
              {...register("linkedin", { required: false })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Quais habilidades você gostaria de destacar? (técnicas ou não) *
            </p>
            <textarea
              placeholder="Habilidades"
              {...register("skills", { required: true })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Por que deseja entrar no grupo? *
            </p>
            <textarea
              placeholder="Por que deseja entrar no grupo?"
              {...register("why", { required: true })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <p className="font-semibold text-lg text-gradient">
              Conte um pouco de você. Como você chegou até o Inteli? O que você
              pretende realizar estudando aqui?... *
            </p>
            <textarea
              placeholder="Conte um pouco de você. Como você chegou até o Inteli? O que você pretende realizar estudando aqui?..."
              {...register("about", { required: true })}
              className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
            />

            <div className="flex flex-col items-center">
              <button
                className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-3/4 mb-16 ${
                  disable
                    ? "cursor-not-allowed bg-red-600 text-white"
                    : "bg-gradient"
                }`}
                disabled={disable}
              >
                <input type="submit" value={buttonText} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SelectiveProcess;
