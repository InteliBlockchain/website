import axios from "axios";
import { useState } from "react";

const Modal = (isOpened: boolean) => {
  const [email, setEmail] = useState("");

  const onSubmit = async (email: string) => {
    if (!email) {
      alert("Preencha seu email!");
      return;
    }

    try {
      const response = await axios.post(
        'https://blockchain-api-inteli.herokuapp.com/Subscription/sendConfirmationEmail', {
          email: email,
        }
      );

      alert(response.data);
    } catch (error) {
      alert("Erro ao enviar email. Tente novamente ou cheque seu email.");
    }
  };

  return isOpened ? (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-content bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg py-4 text-left px-6">
        <p className="modal-header">
          <p className="text-2xl font-bold mb-8">
            <span className="close mr-2">&times;</span>
            Inscreva-se no Processo Seletivo
          </p>
        </p>
        <div className="modal-body">
          <p className="text-lg text-gray-700 mb-4">
            Insira o seu email e receberá um email de confirmação para ir para a
            próxima etapa do Processo Seletivo.
          </p>

          <p className="font-semibold text-lg text-gradient">Seu email:</p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
            className="w-full border border-gray-300 p-2 text-lg rounded-t-md border-b-2 border-b-indigo-600 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-8"
          />

          <button
            className={`bg-gradient-to-r text-white font-bold text-lg p-4 rounded-md shadow-md w-full md:w-full bg-gradient`}
            onClick={() => onSubmit(email)}
          >
            <input type="submit" value="Enviar" />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
