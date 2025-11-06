import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function CardPeneira({ peneira }) {
 const [selected, setSelected] = useState(false)
    const { imagem, time, data } = peneira;

    return (
               
               <article key={peneira.id} className="bg-white shadow-lg rounded-xl p-10 hover:shadow-2xl transition duration-200">
                <img 
                src={imagem} 
                alt={time} 
                className="h-40 w-full object-contain bg-white p-4"/>
                <h3 className="text-3xl font-bold text-purple-600 mb-2 select-none underline">{peneira.time}</h3>
                <p className="text-xl text-gray-700 mb-2 select-none">Data: {peneira.data}</p>
                <p className="text-xl text-gray-700 mb-4 select-none">Local: {peneira.local}</p>
                <button onClick={() => setSelected(peneira)}className="bg-purple-600 text-white py-2 w-full rounded-xl hover:bg-purple-700 cursor-pointer text-2xl text-center">
                  Inscreva-se
                </button>
              </article>
              
    )
}