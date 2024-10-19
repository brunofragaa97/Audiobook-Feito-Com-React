import { useState } from "react";
import CampoNome from "./Components/CampoNome";
import CampoCapitulo from "./Components/CampoCapitulo";
import ArquivoUpload from "./Components/ArquivoUpload";

function TelaUpload() {
  const [botaoUpload, setBotaoUpload] = useState("Nenhum arquivo selecionado");

  return (
    <div className="bg-gradient-to-b from-green-700 to-black h-screen flex-col flex items-center">
      <div className="mt-[1%]">
        <h1 className="text-xl text-white p-8">
          <strong>UPLOAD CAPITULO LIVRO</strong>
        </h1>
      </div>

      <form className="w-full max-w-lg mx-auto p-2 bg-black shadow-lg rounded-lg">
        <CampoNome />

        <CampoCapitulo />

        <ArquivoUpload />
        <div className="text-center">
          <button className="text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            ENVIAR ARQUIVO
          </button>
        </div>
      </form>
    </div>
  );
}

export default TelaUpload;
