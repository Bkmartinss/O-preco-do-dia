# O Preço do Dia
O Preço do Dia é um aplicativo mobile que permite aos usuários gerenciar os produtos, categorias e locais de venda dos produtos e realiza integrações com APIs externas.

## Índice
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)

## Descrição
O Preço do Dia é ideal para pequenas e médias empresas ou indivíduos que precisam acompanhar variações de preços de produtos em diferentes locais e categorias.

## Funcionalidades
- **Login e Autenticação**: Acesso seguro ao aplicativo.
- **Cadastra Produtos**: Gerencie preços de forma rápida.
- **Gerenciamento de Categorias e Locais**: Organize os produtos de acordo com suas categorias e locais.
- **Integração com APIs Externas**: Para gerenciar produtos, locais e categorias dinamicamente.

## Tecnologias Utilizadas
- **Frontend**: React Native, Expo,
- **Navegação**: React Navigation (Stack e Tab Navigators)
- **Backend**: Integrações com APIs externas 
- **Gerenciamento de Dependências**: Yarn
- **Ambiente de Desenvolvimento**: Node.js (versão 18)

## Pré-requisitos
Ferramentas que precisam ser instaladas no seu ambiente de desenvolvimento:
- **Node.js** (versão 18 ou superior)
- **Yarn** (para gerenciamento de pacotes)
- **Expo Go** (para desenvolvimento React Native)
- **Docker** (Para rodar a API)

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/bkmartinss/o-preco-do-dia.git
   cd o-preco-do-dia

   cd FrontEnd
    npm install
    npx expo start -c
        a - android
        w - web //uso este

   cd BackEnd
    npm install
    npm run go 

## Como Usar
Após iniciar o servidor, abra o app Expo Go no seu dispositivo móvel, web ou use um emulador.
Leia o QR Code exibido no terminal ou navegador.
Navegue pelas abas:
- **Login**: Página inicial.
- **Cadastro**: Página para cadastrar o usuário.
- **Home**: Página principal com listagem dos produtos.
- **Produtos**: Cadastro de produtos.
- **Categoria**: Cadastro de categorias dos produtos.
- **Local**: Cadastro de locais.
- **Perfil**: Visualize e edite informações do usuário.

