# Boas vindas ao repositório Games Store (Backend)

Esse projeto é Uma API RESTfull de um sistema de gerenciamento de uma loja de games, onde é possível criar, visualizar, deletar e atualizar os produtos e as vendas. Usado Node.js, Express e MongoDB.
Ainda em fase de desenvolvimento, porém é possível já utilizar.

---

### Tem FRONT ?

Aqui está o [link](https://github.com/becauro/games-store-front) do repositório **frontend** que também fiz para usar com essa API, onde desenvolvi algumas interfaces para interagir com essa API.

No entanto é possível executar esse frontend por aqui também, basta seguir a correta opção ("COM FRONT") que deixei na seção [Via DOCKER](#via-docker).

## <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- [Descrição](#descrição)
- [Requisitos de usuário](#requisitos-de-usuário)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-execucao">Requisitos para execução da API</a>
- [Como executar](#como-executar)
   - [Via DOCKER](#via-docker)
   - [Manualmente](#manualmente-via-host)
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
      
      Por exemplo. Fazendo uma requisição GET a partir de um Browser (Firefox, Chrome e etc) para a URL **http://localhost:3001/products** , funciona.
        

## Como Executar
<a href="#sumario">Sumário</a>

 ### Via DOCKER
 
 --------------------------------------------------------------------------------------------------------------------------------------------------------
 
 Deixei diferentes MODOS de executar esse software via Docker. Os classifiquei assim: **"Normal (frontendless)"**, **"Normal + Modo Dev"**, **"Com Frontend"** e **"Com Frontend + Modo Dev"**.
 
 #### <ins> ☑️ NORMAL </ins>
 
 Esse modo é básico e padrão, sem frontend ("frontendless"); é só a API respondendo requisições e conversando com banco de dados.
 Trata-se do levantamento de um container que dá acesso a API na porta escolhida (padrão: 3001) e pronto.
 Com isso, basta verificar o número IP do gateway da rede docker criada e fazer a requisição para o(s) endpoint(s) desejado(s). 
 Mostro como fazer tudo isso mais a frente. NADA DEMAIS. ;-)
 
 A seguir temos os passos de como usar esse modo ("Normal"), de acordo com a introdução que fiz acima. Junto deixei algumas recomendações técnicas que possivelmente você só precisa ler uma vez, já que se aplica aos demais modos também.
 
========= COMO USAR =========
   
  Para executar o sofware nesse modo, faça as seguintes etapas:
    
 **_1. Verifique o arquivo compose.yml_**
 
  Se você for um desenvolvedor, talvez queria mudar algo nesse aquivo para atender às tuas especificidades, como por exemplo _*1 - Porta exposta*_ e _*2 - Nome da rede*_ . Ahh !.. talvez tu queira colocar uma outra imagem também nos dockerfiles. Sei lá. Umas imagens mais "levinhas" e tal ..🌩️ . Depois vou trocar também.
        
   - Caso decida trocar o valor da variável DB_NAME no arquivo, penso ser boa prática também trocá-las nos arquivos **Dockerfile** e **models/Dockerfile** e VICE-VERSA em prol da legibilidade e documentação. Principalmente se precisar fazer testes ou depurações subindo container, manualmente, sem auxílio do **docker compose**.
       
  Dito isso, se precisas alterar algo mais nesses arquivos ("compose" e "Dockerfiles"), LEIA, antes, as linhas comentadas para não cometer um "ato falho" que que inviabialize a execuçao do software. O valor de uma variável pode está vinculado à uma lógica usada em outro local que ler essa variável. Um exemplo disso são as variáveis de ambientes DB_HOST e PORT do serviço de **_backend_**.
  
  Ok... próximo
 
 **_2.  Execute o docker compose**

   Estando na pasta do arquivo _compose.yml_, via CLI, basta digitar:

      ` docker compose up -d `

 
 **_3. Localize o container criado_**
 
   O nome do container eu deixei com estrutura padrão mesmo, que é formado por:
      
      `nome_da_PASTA + nome do SERVIÇO + um NÚMERO`
      
   Sendo assim...
      
   O primeiro container do projeto, o compose, provavelmente, nomeará o serviço de backend com algo parecido com: `games-store-back-backend-1`.
   Já o container de banco de dados seria algo como: `games-store-back-database-1`.
   
       
 **_4. Identifique o IP do gateway do container_**
 
   Como usei nesse projeto um rede que a documentação docker classifica como "user-defiend bridge", para acesssar o container a partir do host precisamos usar o ip que Docker define para o gateway que o docker atribuiu para a rede que criamos. Portanto, depois que subimos o(s) container(s), precisamos localizar o número IP do gateway do container e fazer requisição para esse IP.
   
Existem diversas maneiras de fazer isso se estiver usando o Docke via CLI. As que acho mais fácil é inspecionar o próprio container e, com auxílio do grep, filtrar a palavra "Gateway" que já vem acompanhado com seu número IP.

      Sintaxe:

         sudo docker container inspect < nome ou id do container > | grep Gateway

       Exemplo:

         sudo docker container inspect games-store-back-backend-1 | grep Gateway
      

 
 **_5. Faça requisição para um endpoint_**
 
   De posse do ńumero IP, usando alguma ferramenta de requisição como [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download), faça requisição para um endpoint da API.
   
   Use o ID do Gateway obtido na etapa anterior.
   Basta escolher um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).
         
   Exemplo:
         
   Com endpoint `products` seria: `<IP DO GATEWAY>:3001/products`
      
      
 #### <ins> ☑️ NORMAL + MODO DEV </ins>
 
   Esse modo meio que herda todas observações do modo NORMAL citado anteriormente, portanto, não vou reptir quase nada, "apenas fazer algumas referências e acrescentar as diferenças" (poeta, eu ?).
   
   Esse modo consiste em usar outro arquivo de docker compose (_**compose-dev.yml**_) o qual se conecta a outro arquivo Dockerfile (_**Dockerfile-dev**_) configurados de forma que permita que as alterações de código feitas no host, reflita, em tempo real, dentro do container e vice-versa.
   Esse modo facilita para quem está desenvolvendo (daí o sobrenome "modo dev") ou fazendo alterações no projeto, pois não precisa ficar fazendo rebuild a cada alteração, nem reiniciar o container, bastando, apenas, fazer uma nova requisição para o endpoint desejado. Lógico que em produção seriaa usado o arquivo compose do modo NORMAL por exemplo.
  
========= Como o modo funciona por baixo dos panos =========

   Como menionado, o **compose-dev.yml** usa como contexto de build o arquivo **Dockergile-dev**. Esse Dockerfile-dev tem nada menos   ue um comando diferente no entrypoint, que é o comando `npm run dev`, ao invés de `npm stat`. Esse comando _npm run dev_ que executa o script que tem **nodemon** no `package.json` no lugar do **node**.   
   O **_nodemon_** é uma ferremnta que executar script JS mas monitora em tempo real mudanças ocorridas no código e, automaticamente, reinicia o servidor quado qualquer alteração é salva.
    
   No **compose-dev.yml** também foi adicionado um volume do tipo **bind mount**. Isso que permite vincular a pasta raiz do projeto entre host e container, sem precisar fazer rebuild toda hora só pra desenvolvimento. As mudanças em qualquer parte do projeto no host, refletem, diretamente, dento do container e VICE-VERSA. 
   
========= COMO USAR =========
   
  Para executar o sofware nesse modo, faça as seguintes etapas (as mesmas do modo NORMAL com "pífias" exceções):
   
**_1. Verifique o arquivo compose-dev.yml_**

Considere todas observações apresetadas no modo NORMAL.

Aqui só trocamos o arquivo do docker compose ( que passa a ser `compose-dev.yml`)


**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag -f passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de NORMAL + MODO DEV:

` docker compose -f compose-dev.yml up -d `

Pra descer container também use a flag -f , hein. 👁️

**_3. Localize o container criado_**

Da mesma maneira já explicada no modo NORMAL. ➿


**_4. Identifique o IP do gateway do container_**

Da mesma maneira já explicado no modo NORMAL.

Em resumo: 

      Sintaxe:

         sudo docker network inspect < nome ou id da rede > | grep Gateway

      Exemplo:

         sudo docker network inspect games-store | grep Gateway


**_5. Faça requisição para um endpoint_**

 Da mesma maneira já explicado no modo NORMAL.


 Em resumo: 

 Use o ID do Gateway obtido na etapa anterior.
 Basta escolher um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).

 Exemplo:
         
 Com endpoint `products` seria: `<IP DO GATEWAY>:3001/products`


         
 #### <ins> ☑️ COM FRONTEND </ins>
 
   Esse modo consiste em excutar a API (esse repositório atual em que estamos) juntamente com o frontend (outro repositório mencionado no começo da documentação). O backend continuará executando na porta 3001 do IP do Gateway, e o frontend executará na porta 3000 do IP do Gateway.
   Mas o frontend consegue ser acessado, TAMBÈM, pelo localhost. Então, se usar a URL localhost:3000, já consegue acessar tudo (front, back e databse) de uma vez śó.
   
   No entanto, **há pré-requisitos** para se usar esse modo, devido as configurações feitas no arquivo do docker compose. Caso não sejam atendidos, o modo não funionará. Os pré-requisitos são: 1 - Baixar/clonar previamente o repositório de frontend, 2 - O nome da pasta raiz do repositório de frontend precisa ser "games-store-frontend", 3 - A pasta precisa estar na pasta PAI deste projeto aqui (backend) 4 - Garantir todas permisões de excução recursiva. A seguir vou dar a opção de como preencher esses requistos de uma vez só, e de duas maneiras. 😺
 
========= COMO ATENDER PRÉ-REQUISITOS =========
   
   Duas formas de fzer isso são:
   
   A) Usando o git clone e mais um rápido comando
   
   * Clone o repostiório frontend ([Link do repo](https://github.com/becauro/games-store-front))
   * Depois , para evitar problema, dê permissão recursiva para o repositório baixado: `chmod -R 777 games-store-front`
   
   Essas duas etapas já deveria, automaticamente, preencher todas as condições preestabelecidas. 
   Mas se por algum motivo não puder usar git, tem a opção dois abaixo.
   
   
   B) Obter frontend sem git, usando meu script em shell
   
 Acho que forma mais fácil e rápida de preencher todos os requisitos sem usar git, é executando script em shell que eu criei: `download_front.sh`. hehe 🥰
 Esse script encontra-se na pasta raíz do projeto. Ele automanticamente baixa, extrai, move para a pasta certa, renomeia e dá as permissões necessárias para o repositório frontend.
   
  Portanto, se for usar o script, apenas execute-o  **com privilêgios elevados** (sudo , root e etc) e veja se na saída ele emite vários "OK" em cada etapa.
  Se for emitido alguma marcação de "FAIL" após a execução do script, siga instruções dadas e execute-o noavamente até que todas as suas etapas sejam marcadas com "OK".
  
  O script em shell se executa, basicamente, assim:
  
  `./download_front.sh`
  
  
========= COMO USAR =========  
   
Com o repositório frontend baixado em uma pasta acima da que se encontramos, seguimos as mesmas etapas descritas nos modos anteriores. Aqui vai um "resumo do resumo" delas.
 
São praticamente as mesmas etapas do modo NORMAL com pequenas exceções:
   
**_1. Verifique o arquivo compose-with-front.yml_**

Considere todas observações apresetadas no modo NORMAL.

Aqui só trocamos o arquivo do docker compose ( que passa a ser `compose-with-front.yml`)

**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag -f passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de COM FRONTEND:

` docker compose -f compose-with-front.yml up -d `

Pra descer container também use a flag -f , hein. 👁️

**_3. Localize o container criado_**

Da mesma maneira já explicada no modo NORMAL. ➿


**_4. Identifique o IP do gateway do container_**

Da mesma maneira já explicado no modo NORMAL.

Em resumo: 

      Sintaxe:

         sudo docker network inspect < nome ou id da rede > | grep Gateway


**_5. Faça requisição para um endpoint_**

 Da mesma maneira já explicado no modo NORMAL.


 Em resumo: 

 Use o IP do Gateway obtido na etapa anterior.
 Basta escolher um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).

Exemplo:
         
Com endpoint `products` seria: `<IP DO GATEWAY>:3001/products`
   
   
    
 #### <ins> ☑️ COM FRONTEND + MODO DEV </ins>
 
   Esse modo herda a mesmas funcionalidades **E PRÉ_REQUISITOS** do modo COM FRONTEND, mas com adição das características de **"modo-dev"** já explicadas no modo NORMAL + MODO DEV.
   Ou seja, você terá containers backend e frontend juntos, mas poderá aplicar alterações a partir do host, e ver mudanças repercurtirem em tempo real devido ao **nodemon**. Mais detalhes: os mesmos descritos no modo NORMAL + MODO DEV. Bom, qualquer coisa leia novamente o modo NORMAL + MODO DEV ali em cima e modo COM FRONTEND.
   

========= COMO USAR =========  
   
Com os **PRÉ_REQUISITOS** atendidos seguimos as mesmas etapas descritas nos modos anteriores. Aqui vai um "resumo do resumo" delas.
 
São praticamente as mesmas etapas do modo NORMAL com pequenas exceções:
   
**_1. Verifique o arquivo compose-dev-with-front.yml_**

Considere todas observações apresetadas no modo NORMAL.

Aqui só trocamos o arquivo do docker compose ( que passa a ser `compose-dev-with-front.yml`)

**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag -f passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de COM FRONTEND + MODO DEV:

` docker compose -f compose-dev-with-front.yml up -d `

Pra descer container também use a flag -f , hein. 👁️

**_3. Localize o container criado_**

Da mesma maneira já explicada no modo NORMAL. ➿


**_4. Identifique o IP do gateway do container_**

Da mesma maneira já explicado no modo NORMAL.

Em resumo: 

      Sintaxe:

         sudo docker network inspect < nome ou id da rede > | grep Gateway


**_5. Faça requisição para um endpoint_**

 Da mesma maneira já explicado no modo NORMAL.


 Em resumo: 

 Use o IP do Gateway obtido na etapa anterior.
 Basta escolher um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).

Exemplo:
         
Com endpoint `products` seria: `<IP DO GATEWAY>:3001/products`
   
   

 ### Manualmente (Via HOST)
 
 --------------------------------------------------------------------------------------------------------------------------------------------------------

   Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:
   
   **1. Variáveis de ambiente**
      
   Existe um arquivo na raiz do projeto chamado `.env.model`.
   Apesar de já explicado no tópico "Requisitos para execução da API", não custa ratificar aqui.
   As configurações do projeto também podem ser alteradas nesse arquivo, adicionando o valor desejado após o sinal de igual (=) em cada variável.
   **Lógico que não é obrigado essa alteração**, desde que não exista problemas com as configurações padrões do projeto.
   Se for usar o arquivo, terá que renomea-lo parar `.env`.

   As variáveis do arquivo .env.model são as seguintes:
   _*PORT*_, _*DB_NAME*_, _*DB_HOST*_ e _*DB_PORT*_.

   **PORT** diz respeito a porta em que o servidor irá rodar. Se nada for atribuido a essa variável, o servidor rodará na porta `3001`.

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
   
   Use algum software cliente de API (ex.: Postman, Insomnia e etc) e faça as requisições para os ENDPOINTs usando a URL **http://localhost:3001** 
   Se for o caso, não esqueça de substituir `porta 3001` pela porta que você definiu na variável PORT do arquivo `.env`.
  

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
