function TelaUpload() {
    return (
      <div className="bg-gradient-to-b from-green-700 to-black h-screen flex-col flex items-center">
        <div className="mt-[5%]">
          <h1 className="text-xl"><strong>FORMULARIO DE UPLOAD</strong></h1>
        </div>
        
        <form className="w-full max-w-lg mx-auto p-4 bg-black shadow-lg rounded-lg">
          {/* Campo de texto para nome */}
          <div className="mb-4">
            <label hymlFor="nomeLivro" className="block text-sm font-medium text-white">Nome do Livro:</label>
            <input type="value" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Seu nome" />
          </div>
  
          {/* Campo de e-mail */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">E-mail</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Seu e-mail" />
          </div>
  
          {/* Campo de senha */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">Senha</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Sua senha" />
          </div>
  
          {/* Botão de envio */}
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
          </div>
        </form>
      </div>
    );
  } 
  
  export default TelaUpload;
  