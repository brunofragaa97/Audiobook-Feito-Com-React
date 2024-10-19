import { useState } from "react";

function ArquivoUpload() {
  
    const [nomeArquivo, setNomeArquivo] = useState ("Selecionar o arquivo para upload ");

    
    //ESSA ARROW FUNCTION, É ACIONADA NA SELEÇÃO DO ARQUIVO, ELA PEGA O NOME DO ARQUIVO E ALTERA APOS SELECIONADO
    const arquivoSelecionado = (evento) => {
        if(evento.target.files.length > 0){
            setNomeArquivo(evento.target.files[0].name);
        }else{
            return nomeArquivo;
        }
    }
  
    return (
    <div className="mb-4 p-8 text-center">
      <label 
        htmlFor="arquivoUpload" 
        className="custom-file-upload bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        {nomeArquivo}
      </label>
      <input
        type="file"
        id="arquivoUpload"
        name="arquivoUpload"
        accept=".pdf"
        onChange={arquivoSelecionado}
        className="hidden mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <p className="text-red-800 mt-8"><strong >Só aceitamos arquivos .pdf</strong></p>
    </div>
  );
}
export default ArquivoUpload;
