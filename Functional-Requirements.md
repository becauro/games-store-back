# Requisitos funcionais
<a href="https://github.com/becauro/store_manager"> Página inicial </a>

Nesse readme é descrito cada **requisito funcional** do projeto.

---

## Sumário

- [1 - Endpoint para o cadastro de produtos](#1---endpoint-para-o-cadastro-de-produtos)
- [2 - Endpoint para listar os produtos](#2---endpoint-para-listar-os-produtos)
- [3 - Endpoint para atualizar um produto](#3---endpoint-para-atualizar-um-produto)
- [4 - Endpoint para deletar um produto](#4---endpoint-para-deletar-um-produto)
- [5 - Endpoint para cadastrar vendas](#5---endpoint-para-cadastrar-vendas)
- [6 - Endpoint para listar as vendas](#6---endpoint-para-listar-as-vendas)
- [7 - Endpoint para atualizar uma venda](#7---endpoint-para-atualizar-uma-venda)
- [8 - Endpoint para deletar uma venda](#8---endpoint-para-deletar-uma-venda)
- [9 - Atualização da quantidade de produtos](#9---atualização-da-quantidade-de-produtos)
- [10 - Validação da quantidade de produtos](#10---validação-da-quantidade-de-produtos)

---

## Requisitos funcionais



### 1 - Endpoint para o cadastro de produtos
[Sumário](#sumário)
- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos em uma **collection** do MongoDB;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "product_name",
  "quantity": "product_quantity"
}
```

O retorno da API de um produto cadastrado com sucesso deverá ser:

```json
{
  "_id": "5f43a7ca92d58904914656b6",
  "name": "Produto do Batista",
  "quantity": 100
}
```

#### Validações:

- `name` deve ser uma _string_ com mais de 5 caracteres e deve ser único;

- `quantity` deve ser um número inteiro maior que 0;

- Cada produto deve ter um id que seja único e gerado no momento em que o recurso for criado.

- A resposta do endpoint em caso de sucesso deve ser o produto criado.


### 2 - Endpoint para listar os produtos
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/products`) ou (`/products/:id`);

- Através do caminho `/products`, todos os produtos devem ser retornados;

- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;


### 3 - Endpoint para atualizar um produto
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- O corpo da requisição deve seguir a mesma estrutura do método responsável por adicionar um produto;

- Apenas o produto com o `id` presente na URL deve ser atualizado;


### 4 - Endpoint para deletar um produto
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- Apenas o produto com o `id` presente na URL deve ser deletado;

### 5 - Endpoint para cadastrar vendas
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/sales`);

- As vendas enviadas devem ser salvas em uma `collection` do MongoDB;

- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;

- O endpoint deve receber a seguinte estrutura:

```json
[
  {
  "productId": "product_id",
  "quantity": "product_quantity",
  },
  ...
]
```

O retorno de uma venda cadastrada com sucesso deverá ser:

```json
{
  "_id": "5f43ba333200020b101fe4a0",
  "itensSold": [
    {
      "productId": "5f43ba273200020b101fe49f",
      "quantity": 2
    }
  ]
}
```

#### Validações:

- O `productId` devem ser igual ao `id` de um produto anteriormente cadastrado;

- `quantity` deve ser um número inteiro maior que 0;

- Cada venda deve ter um id que seja único e gerado no momento em que o recurso for criado;

- A resposta do endpoint em caso de sucesso deve ser a(s) venda(s) criada(s).


### 6 - Endpoint para listar as vendas
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/sales`) ou (`/sales/:id`);

- Através do caminho `/sales`, todas as vendas devem ser retornadas;

- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;


### 7 - Endpoint para atualizar uma venda
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- O corpo da requisição deve receber a seguinte estrutura:

```json
[
  {
    "productId": "5f3ff849d94d4a17da707008",
    "quantity": 3
  }
]
```

- `quantity` deve ser um número inteiro maior que 0;

- Apenas a venda com o `id` presente na URL deve ser atualizada;


### 8 - Endpoint para deletar uma venda
[Sumário](#sumário)

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- Apenas a venda com o `id` presente na URL deve ser deletado;


### 9 - Atualização da quantidade de produtos
[Sumário](#sumário)

- Ao realizar uma venda, atualizá-la ou deletá-la, deve-se, também, atualizar a quantidade do produto em questão presente na `collection` responsável pelos produtos;

- Por exemplo: suponha que haja um produto chamado _Bola de Futebol_ e a sua propriedade `quantity` tenha o valor _10_. Caso seja feita uma venda com _8_ unidades desse produto, a quantidade do produto deve ser atualizada para _2_ , pois 10 - 8 = 2;


### 10 - Validação da quantidade de produtos
[Sumário](#sumário)

- Um produto nunca deve ter a quantidade em estoque menor que 0;

- Quando uma venda for realizada, precisa ser garantido que a quantidade sendo vendida está disponível no estoque.
