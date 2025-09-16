import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import close from "../assets/close.png"

export default function CriarConta() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }
    console.log("Nome:", nome);
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
          Criar Conta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-pink-700">
              Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Digite seu nome"
              required
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium text-pink-700">
              Confirmar Senha
            </label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-medium cursor-pointer"
          >
            Criar Conta
          </button>
        </form>

        <div className="flex justify-center mt-5 text-sm">
          <Link to="/login" className="text-pink-600 hover:underline">
            Já tem conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}