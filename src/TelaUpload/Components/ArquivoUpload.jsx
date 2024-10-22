import { useState } from "react"; // Importa o hook useState do React para gerenciar estado

function ArquivoUpload({ nomeLivro, capituloLivro, limparCampos }) {
    // Define estados para o nome do arquivo, o arquivo em si e mensagens de erro/sucesso
    const [nomeArquivo, setNomeArquivo] = useState("Selecionar o arquivo para upload");
    const [arquivo, setArquivo] = useState(null); // Armazena o arquivo selecionado
    const [mensagem, setMensagem] = useState(""); // Armazena mensagens de erro/sucesso
    const [novoNomeArquivo, setNovoNomeArquivo] = useState (nomeLivro);

    // Função acionada quando um arquivo é selecionado
    const arquivoSelecionado = (evento) => {
        // Verifica se algum arquivo foi selecionado
        if (evento.target.files.length > 0) {
            setNomeArquivo(evento.target.files[0].name); // Atualiza o nome do arquivo no estado
            setArquivo(evento.target.files[0]); // Armazena o arquivo selecionado no estado
        } else {
            // Se não houver arquivo, reseta o nome do arquivo e o estado do arquivo
            setNomeArquivo("Selecionar o arquivo para upload");
            setArquivo(null);
        }
    }

    // Função para enviar o arquivo selecionado para o servidor
    const enviarArquivo = async (evento) => {
        evento.preventDefault(); // Previna o comportamento padrão do formulário

        // Verifica se um arquivo foi selecionado
        if (!arquivo) {
            setMensagem("Nenhum arquivo selecionado!"); // Atualiza a mensagem de erro
            return; // Sai da função se não houver arquivo
        }
        if(!nomeLivro || nomeLivro.trim() === ""){
          setMensagem ("Favor inserir o nome!")
          return;
        }
        if(!capituloLivro || capituloLivro.trim() === ""){
          setMensagem ("Favor inserir o capitulo corretamente!")
          return;
        }

        const formData = new FormData(); // Cria um novo objeto FormData para enviar o arquivo
        formData.append("file", arquivo); // Adiciona o arquivo ao FormData com a chave 'file'
        formData.append("nomeLivro", nomeLivro);

        try {
            // Faz a requisição POST para o endpoint do servidor Flask
            const resposta = await fetch("http://localhost:5000/upload", {
                method: 'POST', // Define o método como POST
                body: formData, // Envia o FormData como corpo da requisição
            });

            // Verifica se a resposta não foi ok (status HTTP diferente de 2xx)
            if (!resposta.ok) {
                throw new Error("Erro ao enviar o arquivo"); // Lança um erro se a resposta não for bem-sucedida
            }

            const data = await resposta.json(); // Converte a resposta em formato JSON
            console.log("Arquivo enviado com sucesso:", data); // Loga a resposta de sucesso
            setMensagem("Arquivo enviado com sucesso!"); // Atualiza a mensagem de sucesso
            setNomeArquivo("Selecionar o arquivo para upload"); // Reseta o nome do arquivo após o envio
            setArquivo(null); // Reseta o arquivo após o envio
            limparCampos("", "");
           
            
           

        } catch (error) {
            // Captura e loga erros que podem ocorrer durante o envio do arquivo
            console.error("Erro ao enviar arquivo:", error);
            setMensagem("Erro ao enviar o arquivo, servidor indisponivel"); // Atualiza a mensagem de erro
        }
    }

    return (
        <div className="mb-4 p-8 text-center">
            {/* Label que permite a seleção de arquivos */}
            <label
                htmlFor="arquivoUpload"
                className="custom-file-upload bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                {nomeArquivo} {/* Exibe o nome do arquivo ou a mensagem padrão */}
            </label>

            {/* Input oculto para seleção de arquivos */}
            <input
                type="file"
                id="arquivoUpload"
                name="arquivoUpload"
                accept=".mp3" // Aceita apenas arquivos .pdf
                onChange={arquivoSelecionado} // Chama a função ao selecionar um arquivo
                className="hidden mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />

            {/* Mensagem informativa sobre tipos de arquivos aceitos */}
            <p className="text-red-800 mt-8">
                <strong>Só aceitamos arquivos .mp3</strong>
            </p>

            {/* Botão para enviar o arquivo */}
            <button
                onClick={enviarArquivo} // Chama a função enviarArquivo ao clicar
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Enviar Arquivo
            </button>

            {/* Exibe mensagens de erro ou sucesso */}
            {mensagem && <p className="text-red-600">{mensagem}</p>}
        </div>
    );
}

export default ArquivoUpload; // Exporta o componente para uso em outros arquivos
