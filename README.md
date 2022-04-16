<h1>Project THDInformatica Node</h1>

<p align="center">

    <a href="https://yarnpkg.com/">
      <img alt="Yarn" src="https://github.com/yarnpkg/assets/blob/master/yarn-kitten-full.png?raw=true" width="80">
    </a>

    <a href="https://nodejs.org">
      <img alt="NODEJS" src="https://avatars.githubusercontent.com/u/9950313?s=200&v=4" width="80">
    </a>

    <a href="https://www.postgresql.org/">
      <img alt="Postgres" src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" width="80">
    </a>

    <a href="https://typeorm.io/">
      <img alt="typeorm" src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png" width="80">
    </a>

  <img src="https://img.shields.io/static/v1?label=Heroku&message=deploy&color=blue&style=for-the-badge&logo=heroku"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>

  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>

</p>

> Status do Projeto: :warning:

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

...

## Descrição do projeto

<p align="justify">
  Back-end do projeto THDInformática.
  O Projeto consiste em um controle para o usuário, onde ocorre o CRUD de clientes, CRUD de produtos e
    controle de vendas efetuadas (para qual cliente/produtos comprados e status de pagamento).
  O back foi criado utilizando o Nodejs, com o typeorm, banco de dados relacional em postgres.
</p>

## Funcionalidades

:heavy_check_mark: Menu para Listagem de Produtos

:heavy_check_mark: Botão para Cadastro de Produtos

:heavy_check_mark: Menu para Listagem de Clientes

:heavy_check_mark: Botão para Cadastro de Clientes

:heavy_check_mark: Menu para Listagem de Vendas

:heavy_check_mark: Botão para Cadastro de Vendas

## Layout ou Deploy da Aplicação :dash:

> Link do deploy da aplicação do Front-end: https://thdinformaticaweb.herokuapp.com/home

> Link do deploy da aplicação do Back-end: https://thdinformatica.herokuapp.com/

Se ainda não houver deploy, insira capturas de tela da aplicação ou gifs

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [YARN](https://yarnpkg.com/)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto:

```
git clone https://github.com/Devs-IO/ProjectTHDInformaticaNode.git
```

Execute o yarn para instalar as dependências

```
yarn
```

Confirme se o postgres está de pé, e o banco de dados foi criado corretamente.

Atualize o arquivo 'ormconfig.js' para rodar local, copie o código a seguir e cole.

```
      module.exports = {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        //ssl: true,
        //extra: { ssl: { rejectUnauthorized: false } },
        entities: ['./src/models/*.ts'],
        migrations: ['./src/database/migrations/**/*.ts'],
        //entities: ['dist/models/**/*.js'],
        //migrations: ['dist/database/migrations/**/*.js'],
        cli: {
          migrationsDir: ['src/database/migrations/'],
          entitiesDir: 'src/models',
        },
      };
```

Execute o comando do typeorm, para criar as tabelas necessárias:

```
yarn typeorm migration:run
```

Por fim, só iniciar o projeto, lembrando que ele executa na porta localhost:3333

```
yarn run dev
```

## JSON :floppy_disk:

### ER Diagram:

![ERDiagram](./src/database/ERDiagram/thdproject.jpg)

## Iniciando/Configurando banco de dados

É necessário ter o postgres rodando na máquina.
Crie um arquivo .env na raiz do projeto com a seguinte linha, lembrando de atualizar os dados de conexão (PORTA, USUÁRIO, SENHA);
Crie um banco de dados com o nome thdproject.

```
DATABASE_URL = postgres://postgres:postgres@localhost:5432/thdproject
```

## Linguagens, dependencias e libs utilizadas :books:

- [NodeJs](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/)

## Tarefas em aberto

Se for o caso, liste tarefas/funcionalidades que ainda precisam ser implementadas na sua aplicação

:memo: Edição e deleção de Produtos

:memo: Edição e deleção de Clientes

:memo: Edição e deleção de Vendas

:memo: Atualização de Quantidade de produtos ao efetuar uma venda

:memo: Filtro nas telas de pesquisas de Produtos, clientes e vendas

:memo: Filtro nas telas de pesquisas de Produtos, clientes e vendas

:memo: Autenticação de login

:memo: Criação de usuário

## Desenvolvedores/Contribuintes :octocat:

| [<img src="https://avatars.githubusercontent.com/u/38442994?v=4" width=115><br><sub>Rebeca Nonato</sub>](https://github.com/rebecanonato89)
| [<img src="https://avatars.githubusercontent.com/u/81541137?v=4" width=115><br><sub>Gustavo Lopes</sub>](https://github.com/Gustavolopes03)
| [<img src="https://avatars.githubusercontent.com/u/83866481?v=4" width=115><br><sub>Wendell Oliver</sub>](https://github.com/WendellOliver) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2022 - TDHInformatica
