# Boas vindas ao repositório Games Store (Backend)

Esse projeto é Uma API RESTfull de um sistema de gerenciamento de uma loja de games, onde é possível criar, visualizar, deletar e atualizar os produtos e as vendas. Usado Node.js, Express e MongoDB.
Ainda em fase de desenvolvimento, porém é possível já utilizar.

---

### Tem FRONTEND ?

Sim, mas em outro [repositorio](https://github.com/becauro/games-store-front) , que é um projeto **frontend** que fiz em React, o qual tem algumas interfaces. Mas, por padrão, ele não interage com este projeto aqui.
Até porque, ainda existem pré-perequisitos, para vincular ambos projetos (front e back). 
De qualquer forma, os detalhes para fazer isso já é parte deste readme; especificamente no topico [Via DOCKER Compose > Normal + Frontend](#-%EF%B8%8F-normal--frontend-).

## <span id="sumario">Sumário</span>

- [Descrição](#descrição)
- [Requisitos de usuário](#requisitos-de-usuário)
- <a href="#arquitetura-e-padroes">Arquitetura e padrões</a>
- <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a>
- <a href="#futuras-implementacoes">Futuras implementações</a> 
- <a href="#requisitos-dep">Requisitos / dependências </a>
- [Como executar](#como-executar)
   - [Via DOCKER](#via-docker)
   - [Via DOCKER Compose](#via-docker-compose)
   - [Manualmente](#manualmente-via-host)
- [Endpoints](#endpoints)
- [Linter](#linter)
- [Observações](#observações)
- [Requisitos funcionais](#requisitos-funcionais)


## Descrição

Se trata de uma API de gerenciamento de **produtos** e **vendas**. Útil para lojas virtuais.
É quase um controle de estoque por ser um simples CRUD que lida tanto com produtos e as vendas de uma loja virtual, vinculado-os a um banco de dados NoSQL. Tem ainda muita coisa a ser feito. Talvez acrescentar um banco SQL (e.g. PostgreSQL) para lidar com cadastros de usuários. Talvez tente sincronizar com outro projeto que tenho no privado voltado para o mesmo modelo de negócio (lojavirtual). 
Também pretendo atualizar este projeto para TypeScript; ou criar um repositório a parte com ele todo em TypeScript. 
A idea final é criar um backend completo de loja virtual, que não precisa ser 100% Nodejs. Por exemplo, o painel administrativo que falta, posso criar em outra linguagem; um espeçie de microserviço. Enfim, ACEITO SUGESTÕES.

Seguindo os princípios REST, foi desenvolvido alguns ENDPOINTS que se conectam a um banco de dados NÃO relacional (NoSQL), MongoDB.

Há uma Collection para **produtos** (products) serem cadastrados na aplicação, afim de ser possível fazer vendas com esses produtos. 
Da mesma forma, uma Collection para **vendas** (sales) também foi criada. Essas vendas são realizadas conforme a quantidade de produtos disponíveis em estoque.

## Requisitos de Usuário

* Deve ser possível que a pessoa usuária, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. (Mas irei implantar Login e autorizações de usuários, também, brevemente)
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
* Autorizações de usuários com uso de tokens (JWT). Parecido com o que fiz no projeto [Blog API](https://github.com/becauro/blog_api).
* Implantar a aplicação via Cloud ou VPS, para que possa ser consumida e testada externamente.
* Implantar o Banco de Dados em nuvem.

## <span id="requisitos-dep">Requisitos / dependências </span>
<a href="#sumario">Sumário</a>

   Você pode rodar esse projeto de duas maneiras: 1 - Via Docker 🐳 ; 2 - via Docker Compose; 3 - Manualmente 🖐️
   
  Lógico que, se for apenas querer ver o projeto rodando, a forma manual não seria muito interessante.
  
      
   ### Opção 1 - Via Docker

   Se executar via docker, só precisa ter docker. Baixe-o: [site oficial](https://docs.docker.com/engine/install/).
   Daí basta seguir os procedimentos descritos em [Via DOCKER](#via-docker).
   
   O gerenciador de banco de dados (MongoDB), bem como alguns dados necessários, já são, automaticamente, baixandos e configurados na hora que usa o docker.
   Isso graças a outro `Dockerfile` que deixei dentro da pasta `models` para o `docker compose` usar, e também graças ao shellscript, ali, que lida com a configuração e importação de dados.

   ### Opção 2 - Via Docker Compose
   
   Mesma coisas que falei acima. Mas além do docker, tem que ter o plugin Docker compose.
      
   Então é seguir os requisitos mostrado em [Via DOCKER Compose](#via-docker).

   ### Opção 3 - Manualmente (Via Host)

    Se não for executar via docker, tem que ter as dependências listadas abaixo e ainda tem que configurar uma a uma.

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

Como esse projeto não é de arquitetura monolítica, achei viável, também, usar com plugin `docker compose` para automatizar processo de build e criação de container. É até mais recomendado pela praticidade. Mas tudo pode ser manualmente também, óbvio.
Todavia, usar docker manualmente (sem `docker compose`) é preciso considerar, antes, uns detalhes abaixo:

- Precisará então criar uma imagem docker do banco de dados (MongoDB) usando o arquivo Dockerfile que está dentro da pasta `models/`

- Já que o uso de docker em uma aplicação que não tem arquitetura monolitica deixa o deployment de microserviço mais explícito, vale lembrar que, sem docker compose, precisará seguir a ordem certa de levantar os containers. Ou seja: 1 - Container de banco de dados; 2 - Container de Bankend; 3 - Se for usar frontend, baixar/clonar o [outro repositório de front](https://github.com/becauro/games-store-front)  e levante por último.
- Sendo que, se for usar o _repositório de frontend_, precisa atender os pré-requisitos que deixei listado em [Via DOCKER Compose > Normal + Frontend](#-%EF%B8%8F-normal--frontend-).

- Precisa-se ter as variáveis de ambiente e portas configuradas corretamente nos respectivos Dockerfiles; ou via shell, na hora de levantar os containers. 
 
 
 ### Via DOCKER Compose
  --------------------------------------------------------------------------------------------------------------------------------------------------------
 
 - Criei diferentes MODOS para executar esse software via Docker. Os classifiquei assim: **"Normal"**, **"Developer"**, **"Normal + Frontend"** e **"Developer + Frontend"**.

   Algumas REVISÕES básicas sobre uso do _Docker Compose_:
   
 - Interromper (down) e remover os containers criados:

   Basta usar a flag `down` no lugar da flag `up`; não precisa do `-d`, é claro. Vou deixar dois exemplos:

   -  (Modo: Normal): `docker compose down`
   -  (Modo: Developer + Frontend): `docker compose -f compose-dev-with-front down`

 - Para criar container, mas antes reconstruir (build) os Dockerfiles alterados:

   Basta somente incluir a flag `--build` no final do comando que sobe (up) o container. Vou deixar dois exemplos:

   - (Modo: Normal): `docker compose up -d --build`
   - (Modo: Developer + Frontend): `docker compose -f compose-dev-with-front up -d --build` 

 #### <ins> ☑️ NORMAL </ins>
 
 Esse modo é básico e padrão, sem frontend ("frontendless"); é só uma API respondendo requisições e conversando com banco de dados.
 Trata-se do levantamento de um container que dá acesso a API na porta escolhida (padrão: 3001) e pronto.
 
 A seguir temos os passos de como usar esse modo ("Normal"), de acordo com a introdução que fiz acima. Junto deixei algumas recomendações técnicas que possivelmente você só precisa ler uma vez, já que se aplica aos demais modos também.
 
========= COMO USAR =========
   
  Para executar o sofware nesse modo, faça as seguintes etapas:
    
 **_1. (OPCIONAL) Verifique o arquivo compose.yml_**
 
   Acho que importante sempre olhar o arquivo `compose.yml`. 
   Só pra ver as portas , variáveis, nomes de de rede, ou pra ver se tem algo que queira mudar.
  
 
 **_2.  Execute o docker compose**

   Estando na pasta do arquivo _compose.yml_, via CLI, basta digitar:

~~~shell
   docker compose up -d
~~~
 
 **_3. Procure o container criado_**
 
   É sempre bom saber quais containers foram realmente criados: `docker container ls -a`

   O nome de container foi gerado, automaticamente, com a seguinte estrutura:
      
     `nome_da_PASTA + nome do SERVIÇO + um NÚMERO`
         
  Então o primeiro container do projeto para o serviço de backend, por exemplo, terá um nome parecido com: `games-store-back-backend-1`.
 
 
 **_4. Faça requisição para um endpoint_**
 
   De posse do número IP, usando alguma ferramenta de requisição como [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download), faça requisição para um endpoint da API.
   
   Escolha um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).
         
   Por exemplo, para obter (GET) a lista de `products` da loja, seria: `localhost:3001/products` .
      
      
 #### <ins> ☑️ DEVELOPER </ins>
   
========= COMO FUNCIONA =========

   Esse modo consiste em usar outro arquivo de docker compose (_**compose-dev.yml**_) o qual usa outro arquivo Dockerfile (_**Dockerfile-dev**_) configurados de forma que permita que as alterações de código feitas no host, reflitam, em tempo real, dentro do container e vice-versa.
   Esse modo facilita para quem está desenvolvendo, pois não precisa ficar fazendo reconstrução (rebuild) da imagem docker a cada alteração, nem reiniciar o container; Lógico que em produção deveria se usar o arquivo compose do modo NORMAL, por exemplo.

   Esse arquivo **Dockerfile-dev** só tem de diferente um comando no entrypoint (`npm run dev`), o qual executa o script que tem **nodemon** em `package.json`.   
   O **_nodemon_** é uma ferramenta que faz o mesmo que o comando **node**, com a diferença de também monitorar mudanças no código e, automaticamente, reiniciar o servidor web quando qualquer alteração for salva.
    
   No **compose-dev.yml** também foi adicionado um configuração de armazenamento do tipo **bind mount**, o qual permite vincular a pasta raiz do projeto entre host e container sem precisar fazer reconstrução da imagem docker a cada alteração no código.
   
========= COMO USAR =========
   
  Para executar o sofware nesse modo, faça as seguintes etapas (além das etapas já mencionadas no modo NORMAL):
   
**_1. Verifique o arquivo compose-dev.yml_**

    Se você for um desenvolvedor, talvez queira mudar algo nesse aquivo para atender às tuas especificidades, como por exemplo _*1 - Porta exposta*_ e _*2 - Nome da rede*_ . Talvez queira, também, colocar outra imagem GNU/Linux nos Dockerfiles. 
        
   - Caso decida trocar o valor da variável DB_NAME no arquivo, penso ser boa prática também trocá-las nos arquivos **Dockerfile** e **models/Dockerfile** e VICE-VERSA em prol da legibilidade e documentação. Principalmente se precisar fazer testes ou depurações subindo container, manualmente, sem auxílio do **docker compose**.
       
  Dito isso, se precisas alterar algo mais nesses arquivos ("compose" e "Dockerfiles"), leia, antes, as linhas comentadas dentro dos arquivos para não cometer um erro que inviabilize a execuçao do software. O valor de uma variável pode está vinculado à uma lógica usada em outro local que ler essa variável. Um exemplo disso são as variáveis de ambientes DB_HOST e PORT do serviço de **_backend_**.

  
**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag `-f` passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de Developer:

~~~shell
   docker compose -f compose-dev.yml up -d
~~~

Note: Pra parar container também use a flag -f , hein (👁️)!

**_3. Localize o container criado_**

   É sempre bom verificar quais containers foram realmente criados: `docker container ls -a`

   O nome de container foi gerado, automaticamente, com a seguinte estrutura:
      
     `nome_da_PASTA + nome do SERVIÇO + um NÚMERO`
         
  Então o primeiro container do projeto para o serviço de backend, por exemplo, terá um nome parecido com: `games-store-back-backend-1`.
     
**_4. Faça requisição para um endpoint_**
 
  De posse do número IP, usando alguma ferramenta de requisição como [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download), faça requisição para um endpoint da API.
   
   Escolha um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).
         
   Por exemplo, para obter (GET) a lista de `products` da loja, seria: `localhost:3001/products` .

         
 #### <ins> ☑️ Normal + Frontend </ins>

   Esse modo consiste em excutar a API (esse repositório atual em que estamos) juntamente com o frontend (outro repositório mencionado no começo da documentação). O backend continuará executando na porta 3001, mas o frontend executará na porta 3000.
   Mas o frontend consegue ser acessado, TAMBÈM, pelo localhost. Então, se usar a URL localhost:3000, já consegue acessar tudo (front, back e databse) de uma vez śó.

========= PRÉ-REQUISITOS =========
   
   No entanto, **há pré-requisitos** para se usar esse modo, devido as configurações feitas no arquivo do docker compose. Caso não sejam atendidos, o modo não funionará. 
   Os pré-requisitos são:
   
   1. Baixar/clonar previamente o repositório de frontend,
   2. O nome da pasta raiz desse repositório de frontend baixado precisa ser "games-store-frontend",
   3. A pasta do repositório baixado (do FRONTEND) precisa estar uma pasta acima desta aqui (do BACKEND),
   4. Todas permisões de excução recursiva precisam ser feita na pasta baixada. (Algo como: `sudo chmod -R 777  <pasta front baixada>`) 
   
   A seguir vou dar a opção de como preencher esses requistos de uma vez só, e de duas maneiras. 😺
 
========= COMO ATENDER PRÉ-REQUISITOS =========
   
   Algumas formas de atender isso. Escolha uma:

   A) Sem `git clone`, usando um script shell:
   
   Acho que forma mais fácil e rápida de preencher todos os requisitos sem usar git, é executando script em shell (em padrão POSIX) que criei: `download_front.sh`.
   Esse script encontra-se na raíz do projeto. O que ele basicamente faz é baixar, extrair, mover para a pasta certa, renomear e configura as permissões necessárias para o repositório frontend baixado.
   
   Portanto, se for utilizá-lo, não esqueça de o executar **com privilêgios elevados** (sudo , root e etc) e verifique se na sua saída são emitidos vários "OK" em cada etapa.
   Se houver alguma marcação de "FAIL" após a execução do script, siga instruções apresentadas e execute o script novamente, se for o caso.
   
   
   B) Usando o git clone e mudando permissões :
   
   1. Clone o repostiório frontend ([Link do repo](https://github.com/becauro/games-store-front)).
   2. Depois , para evitar problema, dê permissão recursiva para o repositório baixado: `chmod -R 777 games-store-front`.
   
   Essas duas etapas já deveria, automaticamente, preencher todas as condições preestabelecidas. 
   É uma opção mais pra quem for desenvolver em cima do código. Se for só pra ver como o projeto funciona, sem querer fazer alterações com git, talvez a opção anterior (via shell script) seja melhor.
   

   C) Via Docker compose (TODO)

      Depois vou criar uma imagem docker do front em algum registry (e.g. DockerHub, github e etc) e passar para a arquivo `compose-with-front.yml`. 
      Essa forma seria interessantes também
  
========= COMO USAR =========  
   
_Com o repositório frontend já baixado_ em uma pasta acima da pasta raiz deste projeto, seguimos as mesmas etapas descritas nos modos anteriores. Aqui vai um "resumo do resumo" delas.
 
São praticamente as mesmas etapas do modo NORMAL com pequenas exceções:
   
**_1. Verifique o arquivo compose-with-front.yml_**

Só trocamos o arquivo do docker compose, que passa a ser o `compose-with-front.yml`.

**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag -f passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de Normal + Frontend:

~~~shell
   docker compose -f compose-with-front.yml up -d
~~~


**_3. Localize o container criado_**

   É sempre bom verificar quais containers foram realmente criados: `docker container ls -a`

   O nome de container foi gerado, automaticamente, com a seguinte estrutura:
      
     `nome_da_PASTA + nome do SERVIÇO + um NÚMERO`
         
  Então o primeiro container do projeto para o serviço de backend, por exemplo, terá um nome parecido com: `games-store-back-backend-1`.

**_4. Faça requisição para um endpoint_**

   De posse do número IP, usando alguma ferramenta de requisição como [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download), faça requisição para um endpoint da API.
   
   Escolha um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).
         
   Por exemplo, para obter (GET) a lista de `products` da loja, seria: `localhost:3001/products` .
   
    
 #### <ins> ☑️ Developer + Frontend </ins>
 
   Esse modo herda a mesmas funcionalidades e **PRÉ_REQUISITOS** do modo Normal + Frontend, mas com adição das características de **"modo-dev"** já explicadas no modo Developer.
   Ou seja, você terá containers backend e frontend juntos, mas poderá aplicar alterações a partir do host, e ver mudanças repercurtirem em tempo real devido ao **nodemon**. Mais detalhes: os mesmos descritos no modo Developer. Bom, qualquer coisa leia novamente o modo Developer ali em cima e modo Normal + Frontend.
   

========= COMO USAR =========  
   
Com os **PRÉ_REQUISITOS** atendidos, seguimos as mesmas etapas descritas nos modos anteriores. Aqui vai um "resumo do resumo" delas.
 
São praticamente as mesmas etapas do modo NORMAL com pequenas exceções:
   
**_1. Verifique o arquivo compose-dev-with-front.yml_**

Considere todas observações apresentadas no modo DEVELOPER.

Só trocamos o arquivo do docker compose (que passa a ser `compose-dev-with-front.yml`)

**_2.  Execute o docker compose_**

Aqui também só muda um pouco a sintaxe. Como é um arquivo diferente do padrão, tem que usar  a flag -f passando o caminho para o arquivo do docker compose que deseja usar. Se esquecer dessa flag , o docker compose assume o arquivo errado (compose.yml) e irá levantar containers do modo NORMAL, ao invés de Developer + Frontend:

~~~shell
   docker compose -f compose-dev-with-front.yml up -d 
~~~

Note: Pra descer container também use a flag -f , hein. 👁️

**_3. Localize o container criado_**

   É sempre bom verificar quais containers foram realmente criados: `docker container ls -a`

   O nome de container foi gerado, automaticamente, com a seguinte estrutura:
      
     `nome_da_PASTA + nome do SERVIÇO + um NÚMERO`
         
  Então o primeiro container do projeto para o serviço de backend, por exemplo, terá um nome parecido com: `games-store-back-backend-1`.

**_4. Faça requisição para um endpoint_**

  De posse do número IP, usando alguma ferramenta de requisição como [Postman](https://www.postman.com/downloads) e [Insomnia](https://insomnia.rest/download), faça requisição para um endpoint da API.
   
   Escolha um dos endpoints que listei mais à frente, na seção [Endpoints](#endpoints).
         
   Por exemplo, para obter (GET) a lista de `products` da loja, seria: `localhost:3001/products` .
   
   

 ### Manualmente (Via HOST)
 
 --------------------------------------------------------------------------------------------------------------------------------------------------------

   Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:
   
   **1. Variáveis de ambiente**
      
   Existe um arquivo na raiz do projeto chamado `.env.model`.
   Apesar de já explicado no tópico <a href="#requisitos-dep"> "Requisitos / dependências" </a>, não custa ratificar aqui.
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
