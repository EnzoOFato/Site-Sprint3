# Site-Sprint3
Repositório que servirá como a entrega front-end para a sprint 3
# Passa a Bola - Portal de Futebol Feminino  

## Link do site
http://passabolasprint.vercel.app/

## Descrição do Projeto  
O **Passa a Bola** é um projeto esportivo com o objetivo de facilitar a prática de futebol para mulheres, oferecendo um espaço para acessar informações sobre jogadoras, peneiras e campeonatos. O principal foco do projeto é **cadastrar, listar, gerenciar jogadoras e disponibilizar eventos esportivos**, permitindo que o usuário explore informações, se inscreva em campeonatos e acompanhe notícias do futebol feminino.  

O projeto utiliza LocalStorage e APIs externas (MockAPI) para garantir que os dados sejam persistentes e dinâmicos, oferecendo uma experiência interativa e responsiva.  

## Estrutura do Projeto  
O projeto é dividido em páginas e seções principais:  

* **Cabeçalho (Head)** — indentidade visual do site. 
* **Página Inicial (Index)** — notícias principais e as peneiras em destaque.
* **Jogadoras** — exibe os cards das principais jogadoras do esporte, descrição e história em modal interativo.
* **Peneiras** — lista de peneiras disponíveis com formulário de inscrição e feedback ao usuário.  
* **Campeonatos** — exibe os campeonatos e permite a inscrição com formulário e persistência pelo LocalStorage.  
* **Login/Criar Conta** — autenticação de usuário com formulários controlados e navegação via React Router.  
* **Rodapé (Footer)** — informações de direitos autorais e redes sociais.  

## Funcionalidades  
- **CRUD básico** usado apenas o read para pegar as peneiras e jogadoras por meio da API restful.  
- **Exibição de notícias e eventos esportivos** dinâmicos (API externa para peneiras).  
- **Inscrição em campeonatos e peneiras** com persistência de dados via LocalStorage.  
- **Formulários validados** para login, criação de conta e inscrições.  
- **Busca, filtro e ordenação** de jogadoras e campeonatos.  
- **Feedback visual de ações do usuário** (cards esmaecidos, bordas coloridas, modais animados).  
- **Responsividade total** para todos os tamanhos de tela, seja móvel ou desktop.  

## Efeitos Visuais  
O site utiliza **React** e **TailwindCSS**, priorizando simplicidade e interatividade:  

### Pseudo-classes  
- `:hover` — em botões e cards para indicar interações.  
- `:focus` — campos de formulário destacados quando ativos.  

### Transições e Transformações  
- Transições suaves em botões, cards e modais.  
- Uso de `transform: scale()` e animações CSS (`@keyframes`) para dar destaque.  

### Layout Responsivo  
- **Flexbox** e **Grid** para organização de cards, formulários e seções.  
- Ajuste automático para telas pequenas, médias e grandes.  

## Tecnologias Utilizadas  
- **React** (componentização, hooks, roteamento com React Router).  
- **TailwindCSS** (estilização responsiva e moderna).  
- **MockAPI** (consumo de dados dinâmicos).  
- **LocalStorage** (persistência de inscrições e informações do usuário).  
- **JavaScript/JSX** (interatividade e lógica do front-end).  

## Integrantes
# João Victor Rodrigues de Mattos
# Enzo Amá Fatobene
# Paulo Henrique 
# Leonardo Borges da costa
# Pedro Henrique Araujo de Abreu
