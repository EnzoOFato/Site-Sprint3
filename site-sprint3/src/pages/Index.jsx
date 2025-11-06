import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Grafico from "../components/ui/Grafico"; 

export default function Index() {
    const [peneiras, setPeneiras] = useState([]);

    useEffect(() => {
        fetch("https://68c7483a442c663bd0292293.mockapi.io/jogadoras/info/peneiras")
            .then(response => response.json())
            .then(data => setPeneiras(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="flex flex-col w-full bg-gray-100">

            <div className="flex w-full md:h-300 lg:h-200 mt-10 flex-col sm:flex-row">
                
                <div className="flex items-center justify-center sm:w-1/2 border-pink-700 sm:border-r-4 sm:border-b-0 border-b-4 self-center w-9/10 text-nowrap sm:text-wrap sm:p-0 pb-10">
                    <h1 className="text-gray-800 lg:text-9xl md:text-6xl text-6xl text-center text-wrap">
                        Principais Noticías
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-center justify-center p-4 sm:w-1/2">

                    <div className="w-full lg:w-1/2">
                        <Grafico />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <h2 className="text-center text-gray-800 text-3xl font-bold">
                            Cresce percentual de quem assiste ao futebol feminino, aponta pesquisa
                        </h2>
                        <p className="text-center self-center text-xl mt-4">
                            A pesquisa O Maior Raio-X do Torcedor ouviu 6.373 pessoas no total, sendo 5.023 entrevistas aprofundadas com torcedores de 278 cidades e 714 jovens de 7 a 15 anos.
                        </p>
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
    );
}