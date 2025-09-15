import { useState } from "react";

export default function Jogadoras() {
  const [open, setOpen] = useState(false);
  const [jogadoraSelecionada, setJogadoraSelecionada] = useState(null);

  const jogadoras = [
    {
      nome: "Marta",
      descricao: "Atacante do Orlando Pride.",
      historia: "A Rainha do Futebol, maior artilheira das Copas do Mundo, começou em Alagoas e conquistou o mundo com sua habilidade e liderança.",
      foto: "https://primeirosnegros.com/wp-content/uploads/2021/03/PIONEIRISMOS_marta-min.jpg.webp"
    },
    {
      nome: "Formiga",
      descricao: "Ex-volante do São Paulo.",
      historia: "Com mais de 25 anos de carreira, é símbolo de longevidade e dedicação. Disputou 7 Copas do Mundo e 7 Olimpíadas pela Seleção.",
      foto: "https://sismf.museudofutebol.org/anexos/imagem/614669/w:640/h:640/c:0"
    },
    {
      nome: "Cristiane",
      descricao: "Atacante do Flamengo.",
      historia: "Artilheira nata, é uma das maiores goleadoras da história da Seleção Brasileira, reconhecida por sua força e precisão.",
      foto: "https://www.opovo.com.br/_midias/jpg/2025/06/02/cris_rozeira_flamengo-34924720.jpg"  
    },
    {
      nome: "Debinha",
      descricao: "Atacante do Kansas City Current (EUA).",
      historia: "Jogadora versátil e veloz, brilha tanto na Seleção quanto no exterior, sendo decisiva em jogos importantes.",
      foto: "https://www.olimpiadatododia.com.br/wp-content/uploads/2024/05/A-debinha.jpg.webp"
    },
    {
      nome: "Andressa Alves",
      descricao: "Meio-campo do Corinthians.",
      historia: "Com passagens pelo Barcelona e Roma, é referência em visão de jogo e criatividade, sendo peça-chave na Seleção.",
      foto: "https://cdn.meutimao.com.br/_upload/jogador/andressa-alves-da-silva-no-corinthians_g_corinthians.jpg"
    },
    {
      nome: "Bia Zaneratto",
      descricao: "Atacante do Kansas City Current (EUA).",
      historia: "Apelidada de ‘Imperatriz’, é decisiva em momentos de pressão, sendo destaque em finais e referência no ataque.",
      foto: "https://maquinadoesporte.com.br/wp-content/uploads/2025/01/Bia-Zaneratto-1.png"
    },
    {
      nome: "Gabi Portilho",
      descricao: "Gotham Football Club.",
      historia: "Com muita velocidade e raça, é uma das jogadoras mais queridas da Fiel, sempre decisiva em clássicos e finais.",
      foto: "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2023/11/27/gabi_portilho_caminhando_no_gramado_da_arena_q1l.jpg"
    },
    {
      nome: "Letícia Izidoro",
      descricao: "Goleira do Corinthians.",
      historia: "Confiável e segura no gol, já defendeu o Brasil em diversas competições internacionais e é ídolo da torcida corintiana.",
      foto: "https://dol.com.br/img/Artigo-Destaque/820000/Lele---Brasil_00820723_0_.jpg?xid=2690214"
    },
    {
      nome: "Adriana",
      descricao: "Atacante do Orlando Pride (EUA).",
      historia: "Conhecida como 'Maga', impressiona com sua velocidade e dribles, sendo destaque tanto no Brasil quanto nos EUA.",
      foto: "https://cloudfront-us-east-1.images.arcpublishing.com/gmg/G3NQUDSGDBCE5IAHUEFASNHNIY.jpg"
    },
    {
      nome: "Kerolin",
      descricao: "Meio-campo do Manchester City.",
      historia: "Superou lesões graves para se firmar como uma das maiores promessas da Seleção Brasileira.",
      foto: "https://www.mancity.com/meta/media/mpzdfib5/kerolin-extra-8.jpg"
    },
    {
      nome: "Ary Borges",
      descricao: "Meio-campo do Racing Louisville (EUA).",
      historia: "Destaque na Copa do Mundo de 2023, fez história ao marcar hat-trick na estreia da Seleção Brasileira.",
      foto: "https://on3static.com/uploads/dev/assets/cms/2023/07/24145940/ary-borges-first-hat-trick-womens-world-cup-brazil-racing-louisville-fc.png"
    },
    {
      nome: "Tamires",
      descricao: "Lateral-esquerda do Corinthians.",
      historia: "Capitã e referência, Tamires concilia liderança em campo com talento ofensivo, sendo peça fundamental do Corinthians e da Seleção.",
      foto: "https://cdn.meutimao.com.br/_upload/noticia/2024/12/04/tamires-e-eleita-a-melhor-jogadora-brasileira-do-np941w.jpg"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Nossas Jogadoras</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jogadoras.map((jogadora, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={jogadora.foto}
              alt={jogadora.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">{jogadora.nome}</h2>
            <p className="text-gray-600">{jogadora.descricao}</p>
            <button
              onClick={() => {
                setJogadoraSelecionada(jogadora);
                setOpen(true);
              }}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Ver História
            </button>
          </div>
        ))}
      </div>

      {open && jogadoraSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              {jogadoraSelecionada.nome}
            </h2>
            <p className="text-gray-700">{jogadoraSelecionada.historia}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}