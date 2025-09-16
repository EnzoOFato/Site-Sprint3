import { useState, useEffect } from "react"

export default function Jogadoras() {
  const [open, setOpen] = useState(false)
  const [jogadoras, setJogadoras] = useState([])
  const [jogadoraSelecionada, setJogadoraSelecionada] = useState(null)

    useEffect(() => {
        fetch("https://68c7483a442c663bd0292293.mockapi.io/jogadoras/info/jogadoras")
        .then(response => response.json())
        .then(data => setJogadoras(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Nossas Jogadoras</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jogadoras.map((jogadora, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={jogadora.foto}
              alt={jogadora.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">{jogadora.nome}</h2>
            <p className="text-gray-600">{jogadora.descricao}</p>
            <button
              onClick={() => {
                setJogadoraSelecionada(jogadora)
                setOpen(true)
              }}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer"
            >
              Ver História
            </button>
          </div>
        ))}
      </div>

      {open && jogadoraSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              {jogadoraSelecionada.nome}
            </h2>
            <p className="text-gray-700">{jogadoraSelecionada.historia}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}