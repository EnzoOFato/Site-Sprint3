import { useEffect, useState } from "react"

const Peneiras = () => {
  const [peneiras, setPeneiras] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch("https://68c7483a442c663bd0292293.mockapi.io/jogadoras/info/peneiras")
      .then((resposta) => resposta.json())
      .then((data) => {
        setPeneiras(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao buscar peneiras:", err);
        setLoading(false)
      });
  }, []);

  const handleInscricao = (id) => {
    alert(`Inscrição realizada com sucesso para a peneira #${id}! 🎉`);
    setSelected(null)
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6 flex flex-col items-center justify-center">
      <header className="w-full flex h-30 bg-purple-600 items-center justify-around rounded-xl mb-8">
        <h1 className="text-2xl font-bold text-center text-white select-none">Próximas Datas - Peneiras</h1>
      </header>

      {loading ? (<p className="text-center text-gray-600">Carregando peneiras...</p>) : (
        <section className="grid md:grid-cols-2 gap-6 max-w-8xl mx-auto">
          {peneiras.map((peneira) => {
            return (
              <article key={peneira.id} className="bg-white shadow-lg rounded-xl p-10 hover:shadow-2xl transition duration-200">
                <h3 className="text-3xl font-bold text-purple-600 mb-2 select-none underline">{peneira.time}</h3>
                <p className="text-xl text-gray-700 mb-2 select-none">Data: {peneira.data}</p>
                <p className="text-xl text-gray-700 mb-4 select-none">Local: {peneira.local}</p>
                <button onClick={() => setSelected(peneira)}className="bg-purple-600 text-white px-10 py-2 rounded-xl hover:bg-purple-700 cursor-pointer text-2xl text-center">
                  Inscreva-se
                </button>
              </article>
            )
          })}
        </section>
      )}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <h2 className="text-lg font-bold">Inscrição para {selected.time}</h2>
            <hr />
            <h2 className="text-lg font-bold mb-4">Local: {selected.local}</h2>
            <form onSubmit={(e) => {e.preventDefault(); handleInscricao(selected.id)}}className="space-y-4">
              <input type="text" placeholder="Nome completo" required className="w-full border p-2 rounded"/>
              <input type="email" placeholder="e-mail"required className="w-full border p-2 rounded"/>
              <button type="submit"className="bg-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer">
                Enviar Inscrição
              </button>
            </form>
            <button onClick={() => setSelected(null)}className="mt-4 text-sm text-gray-500 hover:underline cursor-pointer ml-1">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Peneiras