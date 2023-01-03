# Boas vindas ao repositório Games Store (Backend)

Esse projeto é Uma API RESTfull de um sistema de gerenciamento de uma loja de games, onde é possível criar, visualizar, deletar e atualizar os produtos e as vendas. Usado Node.js, Express e MongoDB.
Ainda em fase de desenvolvimento, porém é possível já utilizar.

---

### Tem FRONT ?

Aqui está o [link](https://github.com/becauro/games-store-front) do repositório **frontend** que também fiz para usar com essa API.
Desenvolvi algumas interfaces para interagir com essa API.

Então, corre lá pra dá uma olhada e aproveite para sentar aquele dedo nos botões de `Code Review` pra ajudar o projeto.

## <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- [Descrição](#descrição)
- [Requisitos de usuário](#requisitos-de-usuário)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-execucao">Requisitos para execução da API</a>
- [Dependências](#dependencias)
- [Como executar](#como-executar)
- [Endpoints](#endpoints)
- [Linter](#linter)
- [Observações](#observações)
- [Requisitos funcionais](#requisitos-funcionais)

## Habilidades

Esse projeto teve como objetivo praticar as seguintes hardskills:

- Estruturação de uma aplicação em camadas (Arquitetura MSC);
- Delegação de responsabilidades específicas para cada parte do app;
- Melhora da manutenibilidade e reusabilidade do código;
- Aplicação dos padrões REST;
- Implementação de uma API intuitiva e facilmente entendível.
---

## Descrição

Se trata de uma API de gerenciamento de vendas que manipula **produtos** e **vendas**.
Basicamente é um modesto controle de estoque em forma de CRUD para lidar tanto com produtos como com as vendas .

Seguindo os princípios REST foi desenvolvido alguns ENDPOINTS que se conectam a um banco de dados NÃO relacional (NoSQL), MongoDB.

Há uma Collection para **produtos** (products) serem cadastrados na aplicação, afim de ser possível fazer vendas com esses produtos. 
Da mesma forma, uma Collection para **vendas** (sales) também foi criada. Essas vendas são realizadas conforme a quantidade de produtos disponíveis em estoque.

## Requisitos de Usuário

* Deve ser possível que a pessoa usuária, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. (Mas irei implantar Login e autorizações de usuários também brevemente)
* O usuário deve poder também enviar vendas para o sistema. Essas vendas devem validar se o produto em questão existe.
* Deve, também, ser possível ler, deletar e atualizar vendas.

## <span id="arquitetura-e-padroes">Arquitetura e Padrões</span>
<a href="#sumario">Sumário</a>

* Arquitetura MSC
* API RESTfull

## <span id="tecnologias-utilizadas">Tecnologias utilizadas</span>
<a href="#sumario">Sumário</a>

* Node.js
* Express
* MongoDB
* ESLinter (Para auxiliar na análise de erros no código e também para ajudar manter algumas boas práticas)

## <span id="futuras-implementacoes">Futuras implementações</span>
<a href="#sumario">Sumário</a>

* Autenticação de Usuários (Login)
* Autorizações de usuários com uso de tokens (JWT).
* Implantar a aplicação via Cloud ou VPS, para que possa ser consumida e testada externamente.
* Implantar o Banco de Dados em nuvem do [MongoDB Atlas](https://www.mongodb.com/atlas) ou algo do tipo.

## <span id="requisitos-execucao">Requisitos para execução da API</span>
<a href="#sumario">Sumário</a>

   ### Opção 1 - Via Docker

   1. Ter Docker instalado e pronto para uso.
   2. Docker deve ter acesso à internet por motivos ÓBVIOS.

   ### Opção 2 - Manualmente (Via Host)

   1. **Node.js**
        1. Já testei com Node nas versões 14 e 18. Acredito que funcione nas outras versões intermediárias também.
        2. Para instalar , configurar e gerenciar Nodejs de forma produtiva, recomendo uso da ferramenta [NVM](https://github.com/nvm-sh/nvm#intro).
   
   2. **MongoDB** em `localhost`, na porta `27017` ou o que você definir.
      1. Se o banco estiver em outra porta diferente de 27017, renomeie na raiz do projeto, um arquivo chamado _*.env.model*_ para _*.env*_, e dentro dele defina a variável DB_PORT com a porta que deseja.
      2.  Se gerenciador de banco estiver em outro local / ip que não seja localhost, renomeie na raiz do projeto um arquivo chamado _*.env.model*_ para _*.env*_, e dentro dele defina a variável DB_PORT com numero IP ou hostname correto.

   3. **Nome do banco** se chama `GamesStore` ou o que você definir.
      1. Se por algum motivo não quiser que esse seja o nome do banco,  renomeie na raiz do projeto um arquivo chamado _*.env.model*_ para _*.env*_, e dentro dele defina a variável DB_NAME com o nome desejado.
    
   4. **Porta 3000** disponível ou o que você definir.
      1. A API usa a porta 3000, por padrão. Se esta porta estiver INdisponível,  renomeie na raiz do projeto um arquivo chamado _*.env.model*_ para _*.env*_, e dentro dele defina a variável PORT com o número da porta desejado.

   5. **Software cliente** de teste de API (ex.: Postman, Insomnia e etc)
      1. Por exemplo, faça requisição GET para a URL: localhost:3000/products
         1. *Nesse caso* (por ser método GET), dá pra usar um browser mesmo. 

## <span id="dependencias">Dependências</span>
<a href="#sumario">Sumário</a>

No arquivo `package.json` é listado as dependências necessárias.
Para instalar essas dependências, estando conectado a internet e dentro da pasta do repositório, basta digitar o seguinte comando:

    `npm install`

## Como Executar
<a href="#sumario">Sumário</a>

Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:

1. Banco de Dados MongoDB
   1. Coloque, primeiro, o gerenciador de banco de dados MongoDB em execução.
   2. Para que essa API não retorne um array vazio na rota _*products*_, precisa, previamente, ter dados no banco chamado _*StoreManager*_ e ter, pelo menos, a collection _*products*_. Por isso criei o script  `models/db-import.sh` o qual cria e importa dados (contidos no arquivo `models/dataTestForDb.js`) para esse banco, na collection _*products*_. Assim, quando requisitado com GET, a rota _*products*_ já terá dados para teste, sem precisar criá-los manualmente. Se não quiser usar esse script, ok, mas a API não retornará dados, e você terá que cadastrar, manualmente, usando a rota de POST. 
   **Note**: Não criei script (importador de dados) para a rota _*sales*_. 
2. Feito (ou não) a etapa anterior, basta, dentro da pasta do projeto, executar o comando: `npm start`.
3. Use algum software cliente de API (ex.: Postman, Insomnia e etc) e faça as requisições para os ENDPOINTs usando a URL **http://localhost:3000** 
   1. Se for o caso, não esqueça de substituir a porta 3000 pela porta que você definiu na variávell PORT do arquivo .env.

** Observação**: Os dados que se encontram no arquivo `dataTestForDb.js`, foi obtido do ENDPOINT de produtos _gamers_, da API pública do _Mercado Livre_: `https://api.mercadolibre.com/sites/MLB/search?category=MLB1144`. Apenas modifiquei alguns nomes de parâmetros para se adaptar ao projeto.

## Endpoints
<a href="#sumario">Sumário</a>

### Produtos

* GET: /products
* GET: /products/:id
* POST: /products
* PUT: /products/:id
* DELETE: /products/:id


### Vendas

* GET: /sales
* GET: /sales/:id
* POST: /sales
* PUT: /sales/:id
* DELETE: /sales/:id

## Linter
<a href="#sumario">Sumário</a>

Foi usado [ESLint](https://eslint.org/) para fazer a análise estática do código, afim de manter padrões de indentação e espaçamento dos trechos de códigos.
No entanto, para usá-lo de forma mais manual, o projeto já vem com as dependências relacionadas ao ESLint configuradas no arquivos `package.json`.

Para executá-lo basta usar --- dentro da pasta do projeto --- o comando `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

### ESLint de forma automática

Particulamente eu preferi utilizar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) pela extensão do `VSCode`, em favor da produtividade.

---

## Observações
<a href="#sumario">Sumário</a>

### Estrutura da lista de requisitos funcionais

### Estrutura do banco de dados:

* **Observação:** O `_id` é gerado automaticamente.

* O banco deve ter duas `collections`: uma para os _produtos_ e outra para as _vendas_

  * A tabela de **produtos** terá o seguinte nome: `products`

    * Os campos da collection `products` terão esse formato:

        ```json
        {
          "name": "Sony Playstation 5 825gb Digital Edition Cor  Branco E Preto",
          "price": 6499,
          "thumbnail": "http://http2.mlstatic.com/D_799755-MLA47058389754_082021-I.jpg",
          "description": "",
          "quantity": 7
        }
        ```

  * A tabela de **vendas** terá o seguinte nome: `sales`

    * Os campos da tabela `sales` terão esse formato:

        ```json
        { "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }] }
        ```

    
### Shape de retorno após "insert" no banco:

* A tabela de **produtos**

  * A resposta retornada após um `insert` (criação) no banco precisa ter o seguinte shape:

      ```json
      { "_id": ObjectId("5f43cbf4c45ff5104986e81d"), "name": "Produto tal", "quantity": 10 }
      ```

* A tabela de **vendas**

  * A resposta retornada após um `insert` (criação) no banco precisa ter o seguinte shape:

      ```json
      {
      "_id": ObjectId("5f43cc53c45ff5104986e81e"),
      "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }]
      }
      ```

## Requisitos funcionais
<a href="#sumario">Sumário</a>

Para entender melhor a lógica por trás do código de desenvolvimento da API, é interessante olhar a _Requisitos funcionais_ do projeto.
Acesse  [aqui](Functional-Requirements.md) o **readme** desses _Requisitos Funcionais_.
