import { useState, useEffect } from "react";
import CardNoticias from "../components/CardNoticias";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch("https://690d6065a6d92d83e85145f4.mockapi.io/noticias/geral")
        .then(response => response.json())
        .then(data => setNoticias(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-purple-700">Notícias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {noticias.map((noticia, index) => (
            <CardNoticias key={index} noticia={noticia} />
        ))}
      </div>
    </div>
  );
}