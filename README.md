# Tech Challenge | Pós-Tech FullStack Development - FIAP

Este é o projeto desenvolvido durante a fase IV do curso de pós-graduação em FullStack Development da FIAP - turma I/2024.

Membros do grupo 37:

- Felipe Dias Amorim Pessoa - RM355212 - felipediasamorimpessoa@gmail.com
- Sérgio Percevallis Neto - RM354791 - sergioneto261001@gmail.com
- Thiago Scheffer Fialho - RM353477 - thiago.sch.fialho@gmail.com
- Leonardo Felipe Boatti - leonardoboatti@hotmail.com

[Documentação Técnica](#documentação-técnica-do-projeto) <br>
[Escopo/Requisitos](#o-problema) <br>
[Projeto back-end](https://github.com/XFelipeX/fiap-tech-challenge-2fase)<br>
[Projeto front-end](https://github.com/XFelipeX/fiap-tech-challenge-3fase)<br>
[Protótipo mobile no figma](https://www.figma.com/design/JB0WZqGMfFn1O8VcJbxYw4/Telas-tech-challenge-fase-4?node-id=0-1&t=TqQsZTqbbUDwP3XD-1)

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

## Documentação Técnica do Projeto - FIAP Tech Challenge 4ª Fase

### Introdução

Este documento apresenta uma visão detalhada do projeto desenvolvido na 4ª fase do FIAP Tech Challenge. A aplicação foi implementada utilizando **React Native** com **TypeScript**, gerenciada pelo **Expo**, que atua como bundler e servidor de desenvolvimento. Trata-se de uma interface mobile projetada para consumir e gerenciar posts, incluindo rotas de autenticação e administração. Neste documento, detalhamos os passos para instalação, configuração e execução da aplicação, além de oferecer uma visão geral da arquitetura e da stack tecnológica empregada.

### Setup Inicial

**Pré-requisitos:**

- nodejs v20+
- npm v10+
- backend implementado na 2ª fase do Tech Challenge, Link para o repositorio: https://github.com/XFelipeX/fiap-tech-challenge-2fase
- emulador ou dispositivo físico para rodar a aplicação:
  - Android: Instale o Android Studio ou utilize um dispositivo real.
  - iOS: Xcode ou um iPhone físico.

**Instalação:**

1. Clone o repositório:<br>
   `git clone https://github.com/XFelipeX/fiap-tech-challenge-4fase.git`
2. Instale as dependências:<br>
   `npm install`

**Configuração:**

1. Crie o arquivo .env para definir as variáveis de ambiente necessárias.

```
EXPO_PUBLIC_BACKEND_URL=
```

**Execução:**

1. Inicie o servidor de desenvolvimento do Expo:<br>
   `npm start`
2. Escaneie o QR Code com o Expo Go App (disponível para Android e iOS) ou inicie o emulador configurado.

## Arquitetura da Aplicação

O projeto adota uma abordagem modular, baseada em componentes reutilizáveis e funcionalidades independentes.

- Gerenciamento de Estados de Formulários: É feito com bibliotecas como formik e validações com yup.
- Comunicação com API: Realizada através do axios.
- Rotas: Configuradas utilizando o @react-navigation/native e o expo-router.

## Estrutura de Pastas

```
/assets        # Recursos estáticos como fontes e imagens
/components    # Componentes reutilizáveis
/hooks         # Hooks personalizados
/routes        # Configuração das rotas
/app/screens   # Telas principais
/services      # Integração com APIs e outras funções de serviço
/styles        # Configurações de estilo global
/constants     # Cofigurações de constantes
/scripts       # Scripts de reset do expo
.env.sample    # Exemplo de arquivo de configuração de ambiente
package.json   # Dependências e scripts do projeto

```

## Rotas

As rotas utilizam o expo-router, que permite a navegação declarativa e baseada em arquivos.

- Rotas públicas:
  - /login: Página de login.
  - /postsList: Página com todos os posts.
  - /postDetail/:id: Exibe um post específico para leitura.
- Rotas privadas:
  - /postsAdmin: Página de administração para gerenciar os posts.
  - /postForm: Formulário de criação e edição de posts.
  - /personForm: Formulário de criação e edição de professores/alunos
  - /personList: Página com todos os alunos ou professores.

## Estilização

A aplicação utiliza um esquema de cores dinâmico, configurado através de um hook personalizado chamado useColorScheme. Esse hook ajusta automaticamente o tema da aplicação (claro ou escuro) com base nas configurações do sistema operacional do usuário ou em uma preferência definida na aplicação.

## Stack utilizada

A stack tecnológica do projeto é composta por:

- Frontend:

  - React Native com TypeScript
  - expo como bundler e servidor de desenvolvimento
  - formik e yup para formulários e validações

- Bibliotecas auxiliares:
  - axios: Comunicação com APIs
  - react-native-picker-select: Dropdowns personalizados
    Testing:
  - jest e jest-expo: Para testes unitários
