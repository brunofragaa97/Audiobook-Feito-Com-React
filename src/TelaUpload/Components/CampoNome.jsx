function CampoNome() {
  return (
    <div className="mb-4">
      <label
        htmlFor="nomeLivro"
        className="block text-sm font-medium text-white"
      >
        Nome do Livro:
      </label>
      <input
        type="value"
        name="nomeLivro"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="'Memorias postulas de bras cubas'"
      />
    </div>
  );
}

export default CampoNome;
