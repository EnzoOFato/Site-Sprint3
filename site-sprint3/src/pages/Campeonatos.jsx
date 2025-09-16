import { useState, useEffect } from "react";

export default function Campeonatos() {
  const [selected, setSelected] = useState(null);
  const [inscritos, setInscritos] = useState([]);

  
  useEffect(() => {
    const stored = localStorage.getItem("inscritos");
    if (stored) {
      setInscritos(JSON.parse(stored));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("inscritos", JSON.stringify(inscritos));
  }, [inscritos]);

  const campeonatos = [
    {
      id: 1,
      nome: "Copa Feminina SP",
      data: "12/11/2025",
      local: "São Paulo - SP",
      imagem: "https://otempo.scene7.com/is/image/sempreeditora/futebol%20feminino-futebol-feminino-final-sao_paulo-1725805047?qlt=90&ts=1725805141134&dpr=off",
    },
    {
      id: 2,
      nome: "Taça Rio Feminina",
      data: "25/11/2025",
      local: "Rio de Janeiro - RJ",
      imagem: "https://www.olimpiadatododia.com.br/wp-content/uploads/2018/11/Flamengo-x-Duque-de-Caxias-Campeonato-Carioca-Futebol-Feminino-1.jpg",
    },
    {
      id: 3,
      nome: "Campeonato Mineiro",
      data: "05/12/2025",
      local: "Belo Horizonte - MG",
      imagem: "https://imagens.ebc.com.br/IpcD9dm0Kv87mdlsbgubpy_T804=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/atletico_mg_fem_campeao_estadual.jpg?itok=P3Y9pKWO",
    },
    {
      id: 4,
      nome: "Sul Cup",
      data: "10/12/2025",
      local: "Porto Alegre - RS",
      imagem: "https://gremio.blob.core.windows.net/imgs-site/f19fbf55b7219f71ce89275d6d3a6577.jpg",
    },
    {
      id: 5,
      nome: "Nordeste Open",
      data: "15/12/2025",
      local: "Salvador - BA",
      imagem: "https://ne45.com.br/wp-content/uploads/2023/10/Design-sem-nome-76.jpg",
    },
    {
      id: 6,
      nome: "Brasileirão Feminino Sub-20",
      data: "20/12/2025",
      local: "Brasília - DF",
      imagem: "https://imagens.ebc.com.br/hL5cjJ50oUvWg66DPZaFR8hft6k=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/53307723710_6c4db7aa17_o1.jpg?itok=HKTeuUft",
    },
  ]; // MockApi.io Só Suporta 2 Resources, este é usado com LocalStorage

  const handleInscricao = (e) => {
    e.preventDefault();
    const form = e.target;
    const dados = {
      campeonato: selected.nome,
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      posicao: form.posicao.value,
    };

    setInscritos([...inscritos, dados.campeonato]);
    setSelected(null);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Campeonatos Disponíveis
      </h1>

     
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {campeonatos.map((camp) => (
          <div
            key={camp.id}
            className={`bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg ${
              inscritos.includes(camp.nome)
                ? "border-4 border-green-500 opacity-80"
                : ""
            }`}
          >
            <img
              src={camp.imagem}
              alt={camp.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {camp.nome}
              </h2>
              <p className="text-sm text-gray-600"> Data: {camp.data}</p>
              <p className="text-sm text-gray-600"> Local: {camp.local}</p>
              <button
                onClick={() => setSelected(camp)}
                disabled={inscritos.includes(camp.nome)}
                className={`mt-4 w-full py-2 px-4 rounded-lg font-medium transition cursor-pointer ${
                  inscritos.includes(camp.nome)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {inscritos.includes(camp.nome) ? "Inscrito" : "Inscreva-se"}
              </button>
            </div>
          </div>
        ))}
      </div>

   
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 transform transition-all duration-300 translate-y-[-20px] animate-slideDown">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Inscrição - {selected.nome}
            </h2>
            <form onSubmit={handleInscricao} className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <select
                name="posicao"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Selecione sua posição</option>
                <option value="Goleira">Goleira</option>
                <option value="Zagueira">Zagueira</option>
                <option value="Lateral">Lateral</option>
                <option value="Meia">Meia</option>
                <option value="Atacante">Atacante</option>
              </select>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition cursor-pointer"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
