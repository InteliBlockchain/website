import axios from "../axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { alertService } from "../services/alert.service";
import { Alert } from "./Alert";

interface Props {
  isOpened: boolean;
  closeModal(): void;
}

const Modal: React.FC<Props> = ({ isOpened, closeModal }) => {
  const [buttonText, setButtonText] = useState("Enviar");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [options, setOptions] = useState({
    autoClose: true,
    keepAfterRouteChange: false,
  });

  const onSubmit = async (data: { email: string }) => {
    setDisabled(true);
    setButtonText("Enviando...");

    if (!data) {
      alertService.warn("Preencha seu email!", options);
      setDisabled(false);
      setButtonText("Enviar");
      return;
    }

    try {
      const res = await axios.post(
        `/Subscription/sendConfirmationEmail`,
        {
          email: data.email,
        }
      );

      alertService.success(
        "Email adicionado com sucesso! Vá para sua caixa de entrada para os próximos passos.",
        options
      );

      console.log("Try");
      console.log(res.data);

      setDisabled(false);
      setButtonText("Enviar");
    } catch (err) {
      alertService.error(
        "Erro ao cadastrar email! Error: <b>" +
          (err.response ? err.response.data : err.message) +
          "</b><br/><br/>Seu email pode já estar cadastrado ou você pode ter realizado mais requisições do que deveria. Cheque seu email e caso haja qualquer problema entre em contato!",
        options
      );

      setDisabled(false);
      setButtonText("Enviar");
    }
  };

  return isOpened ? (
    <>
      <Alert />

      <div className="z-30 top-[65%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute modal-content min-w-[40%] bg-white w-11/12 sm:w-5/6 md:w-2/3 mx-auto rounded shadow-lg py-8 text-left px-6 inset-0 h-fit mb-8">
        <div className="relative modal-header flex flex-col md:flex-row items-start md:mb-8">
          <button
            className="text-[20px] transition scale-125 hover:scale-150 text-2xl align-center cursor-pointer alert-del"
            onClick={closeModal}
          >
            &times;
          </button>
          <p className="text-3xl font-bold mb-8 sm:mb-0 sm:ml-4">
            1º Passo: Cadastre seu email
          </p>
        </div>
        <div className="modal-body">
          <div className="text-3xl md:text-5xl lg:text-6xl md:my-2 items-center mb-2">
            <p className="font-bold text-zinc-800 montserrat text-left mb-8">
              Participe do nosso{" "}
              <span className="montserrat text-gradient font-bold">
                processo seletivo!
              </span>
            </p>
            <p className="montserrat text-lg text-zinc-800">
              É a sua chance de aprender mais sobre o mundo da tecnologia
              Blockchain e participar dos projetos do clube!
              <br />
              Insira o seu email e receberá um email de confirmação para ir para
              a próxima etapa do Processo Seletivo.
            </p>
          </div>

          {/* create a warning div */}
          <div
            className="bg-red-200 border border-red-200 p-4 rounded relative my-8"
            role="alert"
          >
            <p className="montserrat text-md text-zinc-800">
              <b>Atenção:</b> O Processo Seletivo é feito em <u>duas etapas</u>:
            </p>
            <p className="montserrat text-md text-zinc-800">
              - A primeira consiste em uma  <b>confirmação do seu email</b>, realizada
              pelo link que será enviado para o email cadastrado;
            </p>
            <p className="montserrat text-md text-zinc-800">
              - A segunda consiste em, seguindo as instruções do email, ir para
              o nosso <b>formulário de inscrição e preencher os textos.</b>
              Você tem 1 hora a partir do clique desse botão para finalizar a
              inscrição. Caso não dê tempo, fique tranquilo, você pode repetir as duas etapas utilizando o mesmo email.
            </p>
            <p  className="montserrat text-md text-zinc-800">
            - Por favor, faça um <b>backup</b> dos textos antes de enviar para a prevenção de erros, porém também faremos um salvamento automático para garantir.
            </p>
          </div>

          <p className="font-semibold text-xl text-gradient">
            Seu email do Inteli:
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="nome.sobrenome@sou.inteli.edu.br"
              {...register("email", {
                required: true,
                pattern: /^[\w-.]+@sou.inteli.edu.br$/,
              })}
              className={`w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent ${
                errors.email ? "text-red-500 mb-1" : "mb-8"
              }`}
            />

            {errors.email?.type === "pattern" && (
              <p className="text-red-500 text-sm mb-2">
                Insira um email do Inteli (@sou.inteli.edu.br)
              </p>
            )}

            <div className="flex flex-col items-center">
              <input
                type="submit"
                value={buttonText}
                className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full cursor-pointer ${
                  disabled
                    ? "cursor-not-allowed bg-red-600 text-white"
                    : "bg-gradient"
                }`}
                disabled={disabled}
              />
              {/* </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
