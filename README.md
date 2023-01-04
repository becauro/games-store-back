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

   Você pode rodar esse projeto de duas maneiras: 1 - Via Docker 🐳 ou 2 - Manualmente 🖐️
   
      
   ### Opção 1 - Via Docker

      Se não tiver, baixe-o no [site oficial](https://docs.docker.com/engine/install/)
      

   ### Opção 2 - Manualmente (Via Host)

   1. **Node.js**

         Nodejs é um framework que tem um engine do Chrome modificada o qual permite que exista, no lado servidor, uma aplicação Web desenvolvida em JavaScript.
         Portanto é o primeiro sofware que permite esse projeto acontecer.
         
        Já testei com Node nas versões 14 à 18. Acredito que funcione nas outras versões. 
        Para instalar , configurar e gerenciar Nodejs de forma produtiva, recomendo uso da ferramenta [NVM](https://github.com/nvm-sh/nvm#intro).
        Com NVM você consegue, "com um dedo", instalar várias versões do Nodejs e escolher qual usá-las quando precisar.
        Mas, se quiser ter mais trabalho, baixe o Nodejs do [site oficial](https://nodejs.org/en/).
   
   2. **MongoDB** 
   
      Essa API se comunica com um banco de dados não relacional (noSQL) implementado em MongoDB.
      Então precisa ter em _*algum lugar*_ (local ou remotamente) o software gerenciador de servidor de banco dados, MongoDB, que se possa usar aqui.

      Caso não o tenha, faça download e instale-o.
      
      [Site oficial](https://www.mongodb.com/try/download/community) para download do _*MongoDB Comunnity Edition*_.
     

   3. **Software cliente** para requição de API (ex.: Postman, Insomnia e etc)
   
      Para testar todos os métodos de requição à essa API, se faz necessário um Software específico para isso.
      Dentre os mais conhecidos até o momento são [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download).
      
      Se for apenas testar o método GET no endpoint, apenas com um browser comum é possível.
      
      Por exemplo. Fazendo uma requisição GET a partir de um Browser (Firefox, Chrome e etc) para a URL **http://localhost:3000** , funciona.
        

## Como Executar
<a href="#sumario">Sumário</a>

 ### Opção 1 - Via Docker
 
 
 **1. Verifique o arquivo compose.yml**
 
   Pode ser que tenha algo a ser mudado nesse aqruivo que atenda as tuas especificidades.
   Acredito que as únicas coisas relevantes que possa ter alguma possiblidade de mudança seria: _*1 - Porta exposta*_ e _*2 - Nome da rede*_
   
   - Se porta padrão exposta (3000) já esteja em uso por outra aplicação, então mude isso, se for o caso.
     Quanto ao nome da rede, acho pouquíssimo provável que já exista outra como o mesmo nome. Todavia, mude se julgar necessário.
   - Se mudar valor da variável DB_NAME no arquivo *_compose.yml*_ , tambem terá que mudar nos arquivos **Dockerfile** e **models/Dockerfile**, E VICE-VERSA.
    
   Referente as outras opções, acredito não haver muita necessidade de alteração mesmo.
  
  Mas, se for alterar algo nesses arquivos, LEIA os comentários ali para não ficar batendo cabeça à toa, uma vez que alterações incorretas inviabilizam o correto funcionamento da aplicação.
   
 
 **2.  Execute o docker compose**

   Basta usar o arquivo compose.yml e ajustar o que achar necessário antes
   Estando na pasta do arquivo, via CLI, basta digitar:

      ` docker compose up -d `



 ### Opção 2 - Manualmente (Via Host)

   Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:
   
   **1. Variáveis de ambiente**
      
   Existe um arquivo na raiz do projeto chamado `.env.model`.
   Apesar de já explicado no tópico "Requisitos para execução da API", não custa ratificar aqui.
   As configurações do projeto também podem ser alteradas nesse arquivo, adicionando o valor desejado após o sinal de igual (=) em cada variável.
   **Lógico que não é obrigado essa alteração**, desde que não exista problemas com as configurações padrões do projeto.
   Se for usar o arquivo, terá que renomea-lo parar `.env`.

   As variáveis do arquivo .env.model são as seguintes:
   _*PORT*_, _*DB_NAME*_, _*DB_HOST*_ e _*DB_PORT*_.

   **PORT** diz respeito a porta em que o servidor irá rodar. Se nada for atribuido a essa variável, o servidor rodará na porta `3000`.

   **DB_NAME** refere-se ao nome do banco de dados que será criado. Se nada for atribuido, o nome do banco será `GamesStore`.

   **DB_HOST** refere-se ao local (hostname ou IP) do Banco de Dados. Se nada for atribuído, será considerado `localhost`.

   **DB_PORT** poderá receber a porta onde se encontra o Banco de Dados. Se nada for atribuído, será considerado a porta `27017`.
   
   **2. Banco de Dados MongoDB**
      Coloque em execução o software servidor de banco de dados MongoDB.
      
   **3. Execute o script para importar dados para o banco de dados**
      Para que essa API retorne dados na rota _*products*_, precisa, obviamente, ter dados no banco chamado _*GamesStore*_ (ou no banco com nome que você definiu na variável DB_NAME no arquivo .env) na coleção ("tabela") _*products*_. Por isso criei um shell script  `models/db-import-for-host.sh` para automatizar a importação de dados, o qual cria o banco, a collection e importa dados que estão em outro script (arquivo `models/dataTestForDb.js`) para o banco criado. Assim, quando requisitado com GET no ENDPOINT _*products*_ será retornado esses dados previamente importados no banco, isentando a necessidade de criá-los manualmente para testar a API. **Se não quiser usar esse script, ok, a API funciona**, mas sem retornar dados; a menos que, alternativamente, cadastre-os, manualmente, usando a rota de POST, por exemplo.
      
      
   **Note**: Não criei script (importador de dados) para a rota _*sales*_. Se requisitares algo para esse ENDPOINT, sem ter dados na collection _*sales*_ no banco, não terás retorno de dados.
   
   **Note 2**: Os dados que se encontram no arquivo `models/dataTestForDb.js`, foram obtidos do [ENDPOINT de produtos para gamers, de uma API pública do Mercado Livre](https://api.mercadolibre.com/sites/MLB/search?category=MLB1144). Apenas modifiquei alguns pontos e parâmetros para se adaptar ao meu projeto.
   
   **4. Instale as dependências**
   
   Estando com acesso a internet e dentro da pasta raíz do projeto, execute o comando:
    
   `npm install`
   
   **5. Execute o projeto**
   
   Estando com acesso a internet e dentro da pasta raíz do projeto, execute o comando:
       
   `npm start`
       
   Se tudo ocorreu bem, após executar esse comando o servidor da API do projeto estará disponível para uso. Faça as requisições.
       
   **6. Fazendo requisições**
   
   Use algum software cliente de API (ex.: Postman, Insomnia e etc) e faça as requisições para os ENDPOINTs usando a URL **http://localhost:3000** 
   Se for o caso, não esqueça de substituir `porta 3000` pela porta que você definiu na variável PORT do arquivo `.env`.
  

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
