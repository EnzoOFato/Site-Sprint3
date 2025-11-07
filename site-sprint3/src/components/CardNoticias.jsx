export default function CardNoticias({ noticia, index }) {
    return (
        <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="w-full h-48 object-cover rounded-md mb-4 object-top"
            />
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">
              {noticia.titulo}
            </h2>
            <p className="text-gray-700 mb-2">{noticia.resumo}</p>
            <p className="text-gray-600 text-sm">{noticia.conteudo}</p>
          </div>
    )
}
