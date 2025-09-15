import { Link } from "react-router-dom"
import logo from "../assets/icone.png"
import menu from "../assets/menu/menu.png"
import { useState } from "react"

export default function Head(){

    const [open, setOpen] = useState(false)

    return (
        <header className="w-full flex h-30 bg-purple-600 items-center justify-around relative">
            <div className="flex justify-center items-center w-1/3">
                <img src={logo} alt="logo" className="w-15 h-15"/>
                <h1 className="text-center text-5xl text-gray-100 font-bold">Passa bola</h1>
            </div>
            <button className="w-12 h-12 lg:hidden md:flex sm:flex justify-center items-center cursor-pointer" onClick={() => setOpen(!open)}>
                <img src={menu} alt="menu-btn" className="object-contain w-12 h-12"/>
            </button>
            <nav className="w-1/3 hidden lg:flex justify-center items-center text-xl text-white">
                <Link className="w-1/4 text-center hover:underline transition duration-200" to="/">Home</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200">Peneieras</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200" to="jogadoras">Jogadoras</Link>
                <Link className="w-1/4 text-center hover:underline transition duration-200" to="campeonatos">Campeonatos</Link>
            </nav>
            <div className="text-white w-1/3 text-center">
                <button className="bg-gray-100 w-50 h-10 rounded hover:bg-transparent transition duration-500 ease-in-out">
                    <Link to="/login" className="flex text-xl text-pink-600 w-full h-full justify-center items-center hover:text-gray-100 hover:border-2 rounded">Login/Cadastra-se</Link>
                </button>
            </div>
            {open && (
            <div className="absolute top-full left-0 w-full bg-purple-700 flex flex-col items-center text-white lg:hidden transition-all">
                <Link className="py-3 w-full text-center border-b border-purple-500 hover:bg-purple-800 font-bold" to="/">Home</Link>
                <Link className="py-3 w-full text-center border-b border-purple-500 hover:bg-purple-800 font-bold">Peneiras</Link>
                <Link className="py-3 w-full text-center border-b border-purple-500 hover:bg-purple-800 font-bold">Jogadoras</Link>
                <Link className="py-3 w-full text-center border-b border-purple-500 hover:bg-purple-800 font-bold">Campeonatos</Link>
            </div>
            )}
        </header>
    )
}