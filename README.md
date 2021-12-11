# Boas vindas ao repositório do Store Manager (develop)

Esse projeto é uma API de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar os produtos e as vendas. Ou seja, um CRUD.

---

# <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-execucao">Requisitos para execução e consumo da API</a>
- [Como executar](#como-executar)
- [Linter](#linter)
- [Requisitos funcionais](#requisitos-funcionais)

# Habilidades

Esse projeto teve como objetivo praticar as seguintes hardskills:

- Estruturação de uma aplicação em camadas (Arquitetura MSC);
- Delegação de responsabilidades específicas para cada parte do app;
- Melhora da manutenibilidade e reusabilidade do código;
- Aplicação dos padrões REST;
- Implementação de uma API intuitiva e facilmente entendível.
---

# <span id="arquitetura-e-padroes">Arquitetura e Padrões</span>
<a href="#sumario">Sumário</a>

* Arquitetura MSC
* API RESTfull.

# <span id="tecnologias-utilizadas">Tecnologias utilizadas</span>
<a href="#sumario">Sumário</a>

* Node.js
* Express
* MongoDB
* ESLinter

# <span id="futuras-implementacoes">Futuras implementações</span>
<a href="#sumario">Sumário</a>

* Implantar a aplicação na plataforma (PaaS) do Heroku, para que possa ser consumida e testada externamente.
* Implantar um Banco de Dados na nuvem do [MongoDB Atlas](https://www.mongodb.com/atlas) para que possa ser utilizado via Heroku.

# <span id="requisitos-execucao">Requisitos para execução e consumo da API:</span>
<a href="#sumario">Sumário</a>

1. **Node.js**
2. **MongoDB**
3. **Porta 3000** disponível, ou configurar outra.
4. Algum cliente de teste de API (ex.: Postman, Insomnia e etc) caso queira testar as requisições.

# <span id="dependencias">Dependências:</span>
<a href="#sumario">Sumário</a>

No arquivo `package.json` é listado as dependências necessárias.
Para instalar essas dependências, estando conectado a internet e dentro da pasta do repositório, basta digitar o seguinte comando:

    `npm install`

# Como Executar

Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:

1. Dentro pasta do projeto, execute o comando: `npm start`.
2. Em seguida, abra algum cliente de API (ex.: Postman, Insomnia e etc) e faça as requicições para as rotas de **http://localhost:3000** (A porta 3000 está como padrão alternativo na ausência de variável de ambiente).

# Linter
<a href="#sumario">Sumário</a>

Foi usado [ESLint](https://eslint.org/) para fazer a análise estática do código, afim de manter padrões de indentação e espaçamento dos trechos de códigos.
No entanto, para usá-lo de forma mais manual, o projeto já vem com as dependências relacionadas ao ESLint configuradas no arquivos `package.json`.

Para executá-lo basta usar --- dentro da pasta do projeto --- o comando `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

## ESLint de forma automática

Particulamente eu preferi utilizar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) pela extensão do `VSCode`, em favor da produtividade.

---

# Requisitos funcionais
<a href="#sumario">Sumário</a>

Para entender melhor a lógica por trás do código de desenvolvimento da API, é interessante olhar a _Requisitos funcionais_ do projeto.
Tratamos sobre isso em seu [Wiki](https://github.com/becauro/store_manager/wiki).
