import Marta from "../assets/indexImgs/Marta.png"

export default function Index(){
    return (
        <div className="flex w-full size-200 bg-gray-100">
            <div className="flex items-center justify-center w-1/2 h-full p-5 border-r-4 border-pink-700">
                <h1 className="text-gray-800 lg:text-9xl md:text-7xl text-6xl text-center">Principais Noticías</h1>
            </div>
            <div className="flex items-center justify-center w-1/2 flex-col h-full p-5 gap-15">
                <h1 className="text-4xl text-center text-gray-800 font-bold">O que está acontecendo no mundo da bola hoje?</h1>
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-gray-800 text-4xl font-bold">Marta melhor da história</h1>
                    <img src={Marta} alt="pic-marta" className="w-100 h-80 rounded self-center border-2 border-indigo-500"/>
                    <p className="text-center self-center w-2/3 text-xl">Maior artilheira do futebol brasileiro (tanto masculino quanto feminino), Marta foi eleita pela IFFHS, a Federação Internacional de História e Estatísticas do Futebol, como a melhor jogadora da história do futebol feminino.
                    </p>
                </div>
            </div>
        </div>
    )
}