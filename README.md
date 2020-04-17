

<h1 align="center">
<img alt="Be The Hero" src="frontend/src/assets/logo.svg" height="'130" width="200px">
</h1>


<h4 align="center">
  🚀 Semana OmniStack 11.0
</h4>

<p align="center">
  

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-web-demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#anger-pr%C3%A9-requisitos">Pré Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-instala%C3%A7%C3%A3o">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)


## :octocat: Projeto
Be the Hero é um projeto que visa ajudar instituições sem fins lucrativos, o cadastro das instituições é feito na web, através do app as pessoas podem entrar em contato para fazerem doações e ajudar em determinada causa!

## 💻 Web Demo
  <img alt="Página inicial" src="https://github.com/ryangalvaogp/Be-the-Hero---Semana-Oministack-11---Rocketseat-/blob/master/img/index.png?raw=true">
  
<img alt="Incidents" src="https://github.com/ryangalvaogp/Be-the-Hero---Semana-Oministack-11---Rocketseat-/blob/master/img/incidents.png?raw=true" >

![](/img/index.png)

![](/img/incidents.png)


## :anger: Pré-requisitos:
 - Ter o ambiente preparado com nodejs, node, npm, yarn.
 - Git instalado para clonar o projeto.
 - Instalar o expo na máquina e no dispositivo móvel.

### Verificar instalação/ versões utilizadas
Verificar se os requisitos estão instalados, não é necessário utilizar as versões especificadas abaixo, porém no momento que foi criado esse projeto, essas são as versões do ambiente:
```sh
$ node -v  
v12.16.1

$ npm -v   
6.13.4

$ nodejs -v
v10.19.0

$ yarn -v   
1.22.4

$ expo --version
3.17.23
```

## :wrench: Instalação 

### Instalação Expo
Ubuntu:
 ```sh
$ npm install -g expo-cli
```
Instalar o expo no dispositivo móvel:

- [Expo Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)

<br>

Executar o npm install para instalar as dependencias do package.json, criando a pasta node_modules.

O comando abaixo clona o projeto e faz a instalação.
```sh
git clone https://github.com/andersonheinz/react-semanaoministack11-rocketseat && cd react-semanaoministack11-rocketseat/backend && npm i && cd ../frontend && npm i && cd ../mobile && npm i
```
Caso ocorra algum problema, para instalar manualmente é necessário fazer o clone do projeto e dentro das pastas backend, frontend e mobile, executar `npm install` para instalar as dependencias do package.json, criando a pasta node_modules.

### Executar aplicações Backend e Frontend

- Abrir terminal na pasta backend e executar `npm start`
- Abrir nova aba no terminal na pasta frontend e executar `npm start`

O comando `npm start` executa os scripts informados no arquivo `package.json`. No backend foi configurado para executar o projeto através do nodemon:
```sh
"scripts": {"start": "nodemon src/server.js"},
```

> O Nodemon é um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor.

#### Verificar se os backend e frontend estão funcionando.

Listar o JSON das ONG's cadastradas
http://localhost:3333/ongs

Página index da aplicação web
http://localhost:3000/


### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
