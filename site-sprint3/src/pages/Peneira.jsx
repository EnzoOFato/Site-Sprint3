import { useEffect, useState } from "react"
import CardPeneira from "../components/CardPeneira"
const Peneiras = () => {
  const [peneiras, setPeneiras] = useState([])
  const [loading, setLoading] = useState(true)


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
        <section className="grid md:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {peneiras.map((peneira, i) => (
            <CardPeneira key={i} peneira={peneira} />
          ))}
        </section>
      )}
    </div>
  )
}

export default Peneiras