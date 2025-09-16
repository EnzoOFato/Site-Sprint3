import React, { useEffect, useState } from "react";

const Peneiras = () => {
  const [peneiras, setPeneiras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://68c7483a442c663bd0292293.mockapi.io/jogadoras/info/peneiras")
      .then((res) => res.json())
      .then((data) => {
        setPeneiras(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar peneiras:", err);
        setLoading(false);
      });
  }, []);

  const handleInscricao = (id) => {
    alert(`Inscrição realizada com sucesso para a peneira #${id}! 🎉`);
    setSelected(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <header className="w-full flex h-30 bg-purple-400 items-center justify-around relative">
        <h1 className="text-2xl font-bold text-center text-white">
          Peneiras - Datas próximas
        </h1>
      </header>

      {loading ? (
  <p className="text-center text-gray-600">Carregando peneiras...</p>
) : (
  <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {peneiras.map((peneira, index) => {
      const locais = [
        "Estádio do Morumbi - São Paulo/SP",
        "Arena Castelão - Fortaleza/CE",
        "Mineirão - Belo Horizonte/MG",
        "Arena da Baixada - Curitiba/PR",
        "Fonte Nova - Salvador/BA",
        "Estádio Beira-Rio - Porto Alegre/RS",
      ];
      return (
        <article
          key={peneira.id}
          className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition"
        >
          <h3 className="text-lg font-bold text-yellow-600 mb-2">
            {peneira.nome}
          </h3>

          <p className="text-sm text-gray-700 mb-2">
            📅 Data:{peneira.data}
          </p>

          <p className="text-sm text-gray-700 mb-4">📍 Local: {locais[index]}</p>
          <button
            onClick={() => setSelected(peneira)}
            className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Inscreva-se
          </button>
        </article>
      );
    })}
  </section>
)}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">
              Inscrição para {selected.local}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInscricao(selected.id);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Nome completo"
                required
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="e-mail"
                required
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Enviar Inscrição
              </button>
            </form>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Peneiras;