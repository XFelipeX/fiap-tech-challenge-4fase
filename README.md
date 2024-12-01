# Tech Challenge | Pós-Tech FullStack Development - FIAP

Este é o projeto desenvolvido durante a fase IV do curso de pós-graduação em FullStack Development da FIAP - turma I/2024.

Membros do grupo 37:

- Felipe Dias Amorim Pessoa - RM355212 - felipediasamorimpessoa@gmail.com
- Sérgio Percevallis Neto - RM354791 - sergioneto261001@gmail.com
- Thiago Scheffer Fialho - RM353477 - thiago.sch.fialho@gmail.com
- Leonardo Felipe Boatti - leonardoboatti@hotmail.com

[Visualizar Documentação Técnica](#documentação-técnica-do-projeto) <br>
[Visualizar Escopo/Requishttps://github.com/XFelipeX/fiap-tech-challenge-4fase.gititos](#o-problema) <br>
[Visualizar Projeto back-end](https://github.com/XFelipeX/fiap-tech-challenge-2fase)<br>
[Visualizar Projeto front-end](https://github.com/XFelipeX/fiap-tech-challenge-3fase)
[Visualizar Prótotipo no figma](https://discord.com/channels/1237156794992824451/1237156794992824454/1312804909753700384)

## O problema

Após o sucesso do desenvolvimento da aplicação de blogging dinâmico
com a implementação do back-end em Node.js e o front-end utilizando React,
chegou a hora de criarmos uma interface gráfica mobile robusta, intuitiva e
eficiente para esta aplicação. Esta atividade focará em desenvolver o front-end
mobile utilizando React Native, proporcionando uma experiência de usuário
excelente tanto para docentes quanto para estudantes.
Requisitos funcionais

---

### A interface gráfica deve incluir as seguintes páginas e funcionalidades

#### Requisitos funcionais

1. Página principal (lista de posts)
   - Exibir uma lista de todos os posts disponíveis.
   - Cada item da lista deve mostrar o título, autor e uma breve
     descrição do post.
   - Incluir um campo de busca para filtrar posts por palavras-chave.
2. Página de leitura de post
   - Exibir o conteúdo completo de um post selecionado.
   - Permitir comentários nos posts (opcional).
3. Página de criação de postagens
   - Formulário para que professores possam criar postagens.
   - Campos para título, conteúdo e autor.
   - Botão para enviar o post ao servidor.
4. Página de edição de postagens
   - Formulário para que docentes possam editar postagens
     existentes.
   - Carregar os dados atuais do post para edição.
   - Botão para salvar as alterações.
5. Página de criação de professores
   - Formulário para que professores possam cadastrar outros
     professores.
   - Botão para enviar o post ao servidor.
6. Página de edição de professores
   - Formulário para que professores possam editar docentes já
     cadastrados.
     o Botão para salvar as alterações.
7. Página de listagem de professores
   - Página para listagem paginada dos professores e, nas tabelas para
     cada professor, teremos um botão de editar que leva para a página
     de edição e um botão de excluir que vai deletar o docente do
     sistema.
8. Replique os requisitos 5, 6 e 7 para estudantes
   - Seguindo o padrão de páginas administrativas feitas para
     professores, faça o mesmo para alunos.
9. Página administrativa
   - Exibir uma lista de todas as postagens, com opções para editar e
     excluir cada post.
   - Botões para editar e excluir postagens específicas.
10. Autenticação e autorização
    - Implementar login para professores.
    - Garantir que apenas usuários autenticados possam acessar as páginas de criação, edição e administração de postagens.

#### Requisitos técnicos

1. Desenvolvimento em React Native
   - Utilizar React Native para desenvolver a interface gráfica do
     aplicativo.
     o Utilização de hooks e componentes funcionais.
2. Estilização
   - Estilizar o projeto de acordo com layout definido pelo grupo.
3. Integração com Back-End
   - Realizar chamadas aos endpoints REST para obter, criar, editar e
     excluir posts.
   - Realizar chamadas aos endpoints REST para obter, criar, editar e
     excluir alunos.
   - Realizar chamadas aos endpoints REST para obter, criar, editar e
     excluir professores.
   - Realizar chamadas aos endpoints REST para autenticação.
   - Validar permissão para professores e alunos, onde professores
     podem modificar/criar um post e os alunos podem apenas
     visualizar.
   - Gerenciar o estado da aplicação com ferramentas como Context
     API ou Redux (opcional).
4. Documentação
   - Documentação técnica detalhada do mobile no README do
     repositório, incluindo setup inicial, arquitetura da aplicação e guia
     de uso.

## Documentação Técnica do Projeto - FIAP Tech Challenge 3ª Fase

### Introdução

### Setup Inicial

**Pré-requisitos:**

**Instalação:**

**Configuração:**

**Execução:**

**Docker compose**

**Somente Aplicação Node (sem Docker)**

## Arquitetura da Aplicação

## Estrutura de Pastas

## Rotas

## Estilização

## Stack utilizada
