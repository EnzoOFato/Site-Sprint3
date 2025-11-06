import { Link } from "react-router-dom"

export default function Card({ index }) {

    const { imagem, time, data } = index;

    return (
        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {
                
            }
            <img 
                src={imagem} 
                alt={time} 
                className="h-40 w-full object-contain bg-white p-4"
            />
            
            <div className="p-4">

                <h3 className="text-lg font-bold text-gray-800">{time} com novas peneiras!</h3>
                
                
                <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">Futebol Peneira</span> - {data}
                </p>
                
            

                
                <Link to="peneiras">
                    <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105">
                        Ver Detalhes
                    </button>
                </Link>
            </div>
        </div>
    )
}