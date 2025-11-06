import { useState } from "react"

export default function CardPeneira({ peneira }) {

  const [selected, setSelected] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  return (
    <>
    <article key={peneira.id} className="bg-white shadow-lg rounded-xl p-10 hover:shadow-2xl transition duration-200 flex flex-col">
      <img
        src={peneira.imagem}
        alt={peneira.time}
        className="h-40 w-full object-contain bg-white p-4" />
      <h3 className="text-3xl font-bold text-gray-800 mb-2 select-none underline">{peneira.time}</h3>
      <p className="text-xl text-gray-700 mb-2 select-none">Data: {peneira.data}</p>
      <p className="text-xl text-gray-700 mb-4 select-none">Local: {peneira.local}</p>
      <button onClick={() => setSelected(true)} disabled={inscrito} className={`bg-purple-600 text-white py-2 w-full rounded-xl hover:bg-purple-700 cursor-pointer text-2xl text-center mt-auto disabled:opacity-50 disabled:cursor-not-allowed`}>
        Inscreva-se
      </button>
    </article>

    {selected && (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 flex-nowrap">
          <div className="bg-gray-100 rounded-xl shadow-xl max-w-md w-full p-10">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Inscrição para {peneira.time}
            </h2>
            <p>Data: {peneira.data}</p>
            <p>Local: {peneira.local}</p>

            <button
              onClick={() => {
                alert(`Inscrição confirmada para ${peneira.time}!`);
                setSelected(false);
                setInscrito(true);
              }}
              className="bg-purple-600 text-white py-2 w-full rounded-xl hover:bg-purple-700 mt-4"
            >
              Confirmar
            </button>
            <button
              onClick={() => setSelected(false)}
              className="bg-gray-300 text-gray-800 py-2 w-full rounded-xl mt-2"
            >
              Cancelar
            </button>
          </div>
        </div>
    )}
    </>
  )
}