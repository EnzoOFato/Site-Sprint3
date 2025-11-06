import Marta from "../assets/indexImgs/Marta.png"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card" 

export default function Index(){
    const [peneiras, setPeneiras] = useState([])

    useEffect(() => {
        fetch("https://68c7483a442c663bd0292293.mockapi.io/jogadoras/info/peneiras")
        .then(response => response.json())
        .then(data => setPeneiras(data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="flex flex-col w-full bg-gray-100">
            
            
            <div className="flex w-full md:h-300 lg:h-200 mt-10 flex-col sm:flex-row">
                <div className="flex items-center justify-center sm:w-1/2 border-pink-700 sm:border-r-4 sm:border-b-0 border-b-4 self-center w-9/10 text-nowrap sm:text-wrap sm:p-0 pb-10">
                    <h1 className="text-gray-800 lg:text-9xl md:text-6xl text-6xl text-center text-wrap">Principais Noticías</h1>
                </div>
                <div className="flex items-center justify-center sm:w-1/2 flex-col sm:gap-15 gap-2 sm:m-0 mt-8 self-center h-1/2 px-10">
                    <h1 className="text-4xl text-center text-gray-800 mb-5">O que está acontecendo no mundo da bola hoje?</h1>
                    <div className="flex flex-col">
                        <h1 className="text-center text-gray-800 text-4xl font-bold">Marta melhor da história</h1>
                        
                        <img src={Marta} alt="pic-marta" className="w-100 sm:h-95 h-70 rounded self-center border-2 border-indigo-500"/>
                        <p className="text-center self-center w-2/3 text-xl">Maior artilheira do futebol brasileiro (tanto masculino quanto feminino), Marta foi eleita pela IFFHS, a Federação Internacional de História e Estatísticas do Futebol, como a melhor jogadora da história do futebol feminino.</p>
                    </div>
                </div>
            </div>
            


            <div className="bg-gray-100 py-10 px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Peneiras em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {peneiras.map((index, i) => (
                        <Card key={i} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}