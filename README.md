# Boas vindas ao repositório Games Store (Backend)

Esse projeto é uma API de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar os produtos e as vendas. Ou seja, um CRUD.

---

## <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- [Descrição](#descrição)
- [Requisitos de usuário](#requisitos-de-usuário)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-execucao">Requisitos para execução e consumo da API</a>
- [Como executar](#como-executar)
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

Começando pela API, foi desenvolvido alguns ENDPOINTS seguindo os princípios do REST que se conectam a um banco de dados NÃO relacional.

Depois, foi criado uma Collection para os **produtos** (products) que desejam se cadastrar na aplicação, afim de ser possível fazer vendas com esses produtos. Após isso, uma Collection para **vendas** (sales) também foi criada. As vendas são realizadas conforme a quantidade de produtos disponíveis em estoque.

## Requisitos de Usuário

* Deve ser possível que a pessoa usuária, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque.
* O usuário deve poder também enviar vendas para o sistema. Essas vendas devem validar se o produto em questão existe.
* Deve, também, ser possível ler, deletar e atualizar vendas.

## <span id="arquitetura-e-padroes">Arquitetura e Padrões</span>
<a href="#sumario">Sumário</a>

* Arquitetura MSC
* API RESTfull.

## <span id="tecnologias-utilizadas">Tecnologias utilizadas</span>
<a href="#sumario">Sumário</a>

* Node.js
* Express
* MongoDB
* ESLinter

## <span id="futuras-implementacoes">Futuras implementações</span>
<a href="#sumario">Sumário</a>

* Implantar a aplicação na plataforma (PaaS) do Heroku, para que possa ser consumida e testada externamente.
* Implantar um Banco de Dados na nuvem do [MongoDB Atlas](https://www.mongodb.com/atlas) para que possa ser utilizado via Heroku.

## <span id="requisitos-execucao">Requisitos para execução e consumo da API:</span>
<a href="#sumario">Sumário</a>

1. **Node.js**
2. **MongoDB**
3. **Porta 3000** disponível, ou configurar outra em uma variável de ambiente.
   3.1 - A API também estar configurada para, opcinalmente, ler uma variável de ambiente que se chame "PORT".
4. Algum cliente de teste de API (ex.: Postman, Insomnia e etc) caso queira testar as requisições.

## <span id="dependencias">Dependências:</span>
<a href="#sumario">Sumário</a>

No arquivo `package.json` é listado as dependências necessárias.
Para instalar essas dependências, estando conectado a internet e dentro da pasta do repositório, basta digitar o seguinte comando:

    `npm install`

## Como Executar

Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:

1. Dentro pasta do projeto, execute o comando: `npm start`.
2. Em seguida, abra algum cliente de API (ex.: Postman, Insomnia e etc) e faça as requisições para os ENDPOINTs de **http://localhost:3000** (Essa porta 3000 está como padrão alternativo à ausência de uma variável de ambiente para porta).
  2.1 - Recomendo usar um `127.0.0.1` ao invés de `localhost`, quando estiver executando outro servidor web, simultâneamente, na mesma máquina. Tive alguns erros com 'localhost' em mais de um servidor. Talvez seja "algo particular", mas não custa avisar. :-) 

**Observação**: Você pode, manualmente, criar um banco chamado `StoreManager` com uma Collection chamada `products`, e então usar algum dos objetos que se encontram no array do arquivo `dataTestForDb.json` (na raiz do projeto) para cadastrar algum produto na API. Esse objetos são alguns produtos que já estão no formato (shape / schema) que deve se usado pelo banco para não haver problema nos retornos das requisições à API.  Se preferir, pode ainda popular o banco (usando um insertMany()) passando o array de produtos que está dentro desse mesmo arquivo, `dataTestForDb.json`.

Os dados que se encontram no arquivo `dataTestForDb.json`, foi obtido do ENDPOINT de produtos _gamers_, da API pública do _Mercado Livre_: `https://api.mercadolibre.com/sites/MLB/search?category=MLB1144`.

Eu apenas modifiquei alguns nomes de parâmetros nesses dados para se adaptar ao que eu queria. E lógico que fiz isso de forma automática, visto que são muito dados.

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

- Em cada requisito você encontrará uma imagem de um protótipo de como sua aplicação deve ficar. 

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
