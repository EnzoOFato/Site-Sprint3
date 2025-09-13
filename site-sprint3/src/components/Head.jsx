import { Link } from "react-router-dom"
import logo from "../assets/icone.png"

export default function Head(){
    return (
        <header className="w-full flex h-30 bg-purple-600 items-center justify-around">
            <div className="flex justify-center items-center w-1/3">
                <img src={logo} alt="logo" className="w-15 h-15"/>
                <h1 className="text-center text-5xl text-gray-100 font-bold">Passa bola</h1>
            </div>
            <nav className="w-1/3 flex justify-center items-center text-xl text-white">
                <Link className="w-1/4 text-center hover:underline transition duration-200" to="/">Home</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200">Peneieras</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200">Jogadoras</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200">Campeonatos</Link>
            </nav>
            <div className="text-white w-1/3 text-center">
                <button className="bg-gray-100 w-50 h-10 rounded hover:bg-transparent transition duration-500 ease-in-out">
                    <Link to="/login" className="flex text-xl text-pink-600 w-full h-full justify-center items-center hover:text-gray-100 hover:border-2 rounded font-bold">Login/Cadastra-se</Link>
                </button>
            </div>
        </header>
    )
}