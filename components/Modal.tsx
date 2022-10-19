import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { alertService } from "../services/alert.service";
import { Alert } from "./Alert";

const Modal = (isOpened: { isOpened: boolean }) => {
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
        `https://inteli-blockchain-server.herokuapp.com/Subscription/sendConfirmationEmail`,
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
          (err.response.data || "Indisponível") +
          "</b><br/><br/>Seu email pode já estar cadastrado.<br/>:)",
        options
      );

      setDisabled(false);
      setButtonText("Enviar");
    }
  };

  return isOpened.isOpened ? (
    <>
      <Alert />

      <div className="modal absolute md:fixed w-full h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-50 z-20 inset-0">
        <div className="modal-content bg-white w-11/12 md:w-1/2 lg:w-1/3  mx-auto rounded shadow-lg py-8 text-left px-6 inset-0 h-auto">
          <p className="modal-header">
            <p className="text-3xl font-bold mb-8">
              Inscreva-se no Processo Seletivo
            </p>
          </p>
          <div className="modal-body">
            <div className="text-3xl md:text-5xl lg:text-6xl md:my-2 items-center mb-2">
              <p className="font-bold text-zinc-800 montserrat text-left mb-8">
                Participe do nosso{" "}
                <span className="montserrat text-gradient font-bold">
                  Processo seletivo!
                </span>
              </p>
              <p className="montserrat text-lg text-zinc-800">
                É a sua chance de aprender mais sobre o mundo da tecnologia
                Blockchain e participar dos projetos do clube!
              </p>
            </div>
            <p className="montserrat text-lg text-zinc-800 mb-8">
              Insira o seu email e receberá um email de confirmação para ir para
              a próxima etapa do Processo Seletivo.
            </p>

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
                {/* <button
                  className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full ${
                    disabled
                      ? "cursor-not-allowed bg-red-600 text-white"
                      : "bg-gradient"
                  }`}
                  disabled={disabled}
                > */}
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
      </div>
    </>
  ) : null;
};

export default Modal;
