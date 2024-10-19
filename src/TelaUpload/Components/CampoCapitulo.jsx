function CampoCapitulo() {
  return (
    <div className="mb-4">
    <label
      htmlFor="capituloLivro"
      className="block text-sm font-medium text-white"
    >
      Capitulo do Livro:
    </label>
    <input
      type="value"
      name="capituloLivro"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="'Capitulo 1'"
    />
  </div>
  );
}

export default CampoCapitulo;
