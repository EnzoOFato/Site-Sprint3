import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import close from "../assets/close.png"

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
       <img
        src={loginImg}
        alt="Imagem temática do Passa a Bola"
        className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 bg-white px-8 md:px-16">
        <Link className="w-10 h-10 absolute top-15 right-20" to="/"><img src={close} alt="fechar" /></Link>
        <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Passa a Bola
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-pink-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

        <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded-lg 
             transition-all duration-300 ease-in-out 
             hover:bg-purple-700 hover:scale-105"
            >
            Entrar
        </button>
        </form>

        <div className="flex justify-between mt-5 text-sm">
          <Link to="/esqueceu-senha" className="text-pink-600 hover:underline">
            Esqueceu a senha?
          </Link>
          <Link to="/criar" className="text-pink-600 hover:underline">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}