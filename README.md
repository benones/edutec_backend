# API de Cadastro de Usuários

Este projeto é uma API simples de cadastro de usuários, construída com **Node.js**, **Express** e **MySQL**. Ele permite que você adicione novos usuários (nome e sobrenome) ao banco de dados e utiliza CORS para facilitar a integração com um front-end.

## Funcionalidades

- Recebe dados de **nome** e **sobrenome** via requisição POST.
- Insere os dados no banco de dados MySQL.
- Responde com mensagens de sucesso ou erro para o cliente.

## Estrutura do Projeto

- `index.js` - Código principal do servidor que configura o Express, conexão com o MySQL, e as rotas para inserção de dados.
- `index.html` - Página principal do front-end com o formulário de cadastro.
- `style.css` - Arquivo de estilo que define o layout e a aparência do formulário.
- `app.js` - Código JavaScript do front-end que envia os dados do formulário para o backend e exibe as mensagens de status.

## Tecnologias Utilizadas

- **Node.js** - Runtime para JavaScript no servidor.
- **Express** - Framework para construir a API.
- **MySQL2** - Cliente MySQL para Node.js.
- **body-parser** - Middleware para processar JSON no corpo das requisições.
- **CORS** - Middleware para permitir requisições entre diferentes origens.

## Configuração

### Pré-requisitos

1. Instale o [Node.js](https://nodejs.org/).
2. Instale o MySQL e configure um banco de dados chamado `edutec` (ou altere o nome no arquivo `index.js` conforme desejado).

### Passos para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
