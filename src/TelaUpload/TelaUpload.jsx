import { useState } from "react";
import ArquivoUpload from "./Components/ArquivoUpload";

function TelaUpload() {
  const [botaoUpload, setBotaoUpload] = useState("Nenhum arquivo selecionado");
  const [nomeLivro, setNomeLivro] = useState ("");
  const [capituloLivro, setCapituloLivro] = useState ("");

function limparCampos(nomeLivro, capituloLivro){
  setNomeLivro("");
  setCapituloLivro("");
}
  

  return (
    <div className="bg-gradient-to-b from-green-700 to-black h-screen flex-col flex items-center">
      <div className="mt-[1%]">
        <h1 className="text-xl text-white p-8">
          <strong>UPLOAD CAPÍTULO LIVRO</strong>
        </h1>
      </div>

      <form className="w-full max-w-lg mx-auto p-2 bg-black shadow-lg rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="nomeLivro"
            className="block text-sm font-medium text-white"
          >
            Nome do Livro:
          </label>
          <input
            type="text" // Corrigido para "text"
            name="nomeLivro"
            value={nomeLivro}
            onChange={(e) => setNomeLivro(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Memórias Póstumas de Brás Cubas" // Corrigido para remover apóstrofos
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="capituloLivro"
            className="block text-sm font-medium text-white"
          >
            Capítulo do Livro:
          </label>
          <input
            type="text" // Corrigido para "text"
            name="capituloLivro"
            value={capituloLivro}
            onChange={(e) => setCapituloLivro(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Capítulo 1" // Corrigido para remover apóstrofos
          />
        </div>

        <ArquivoUpload nomeLivro={nomeLivro}
                       capituloLivro={capituloLivro}
                       limparCampos={limparCampos}/> {/* Passando a função para o componente */}
        
      </form>
    </div>
  );
}

export default TelaUpload;