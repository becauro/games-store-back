# Boas vindas ao repositório do Store Manager

Esse projeto é uma API de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar os produtos e as vendas. Ou seja, um CRUD.

---

# <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-execucao">Requisitos para execução e consumo da API</a>
- [Como executar](#como-executar) 
- <a href="#shape-retornos">ENDPOINTS: Shape dos retornos das requisições</a>
- [Banco de dados: Shape dos Documentos (registros)](#banco-de-dados-shape-dos-documentos-registros)
- [Linter](#linter)
- [Regras de negócio](#regras-de-negócio)

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

# <span id="shape-retornos">ENDPOINTS: Shape dos retornos das requisições</span>
<a href="#sumario">Sumário</a>

  - Caso o recurso não seja encontrado, a API deve retornar o status HTTP adequado com o body `{ message: '<recurso> não encontrado' }`.
  - Em caso de erro, a API deve retornar o status HTTP adequado com o body `{ err: { message: <mensagem de erro>, code: <código do erro> } }`.
    - O código de erro implementado deve deve seguir o mesmo padrão para toda a aplicação. Por exemplo: `'not_found'`, `'invalid_data'` e afins.
  - Em caso de dados inválidos, a API deve retornar o status HTTP adequado, com o body `{ err: { message: 'Dados inválidos', code: <código do erro> } }`.
  - Todos os retornos de erro devem seguir o mesmo formato. Para erros que requerem dados adicionais (por exemplo, para informar quais campos estão incorretos) é utilizado a propriedade `data` dentro do objeto `err`.

# Banco de dados: Shape dos Documentos (Registros)
<a href="#sumario">Sumário</a>

O banco deve duas `collections` para: uma para os produtos e outra para as vendas

A tabela terá o seguinte nome: `products`

Os campos da collection `products` terão esse formato:

```json
{ "name": "Produto Silva", "quantity": 10 }
```

A resposta retornada após um `insert` (criação) no banco precisa ter o seguinte shape:

```json
{ "_id": ObjectId("5f43cbf4c45ff5104986e81d"), "name": "Produto Silva", "quantity": 10 }
```

(O \_id é gerado automaticamente)

A tabela de vendas terá o seguinte nome: `sales`

Os campos da tabela `sales` terão esse formato:

```json
{ "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }] }
```

A resposta retornada após um `insert` (criação) no banco precisa ter o seguinte shape:

```json
{
  "_id": ObjectId("5f43cc53c45ff5104986e81e"),
  "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }]
}
```

(O \_id é gerado automaticamente)


# Linter
<a href="#sumario">Sumário</a>

Foi usado [ESLint](https://eslint.org/) para fazer a análise estática do código, afim de manter padrões de indentação e espaçamento dos trechos de códigos.
No entanto, para usá-lo de forma mais manual, o projeto já vem com as dependências relacionadas ao ESLint configuradas no arquivos `package.json`.

Para executá-lo basta usar --- dentro da pasta do projeto --- o comando `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

## ESLint de foram automática

Particulamente eu preferi utilizar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) pela extensão do `VSCode`, em favor da produtividade.

---

# Regras de negócio
<a href="#sumario">Sumário</a>

Para entender melhor a lógica da API, pode ser interessante olhar a regra de negócio do projeto.
Tratamos dessas no [Wiki](https://github.com/becauro/store_manager/wiki)