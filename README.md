**Base para criação de back-end, api-rest em express + TypeScript.**

**Inicialização (Clone).**
-> Em caso de clone do repositorio, sempre verificar.s
{
# "name": "baseexpress", <= Trocar para o nome do seu projeto.
  "version": "1.0.0",
  "description": "Base para criação de back-end, api-rest em express + TypeScript.",
  "main": "index.ts",
}
-> Para instalar as dependecias já existentes no package.json => (npm install || yarn), assim ira criar a pasta do node_modules.
# Algumas instalações que precisa ser feita, depois do comando acima.
-> Instalações de modo dev, (npm install --save-dev typescript), (npm install --save-dev ts-node-dev).
-> Instalações de "Types", (npm i --save-dev @types/express), (npm i --save-dev @types/cors).


**Necessario para iniciar o projeto. (Caso queira iniciar sem fazer o clone)**
-> Baixar e instalar o Node.js na maquina de desenvolvimento/produção! href="https://nodejs.org/en/", sempre baixar a versão LTS.
-> Para o front-end, mobile app, recomendado baixar e instalar o Expo. href="https://docs.expo.dev/workflow/expo-cli/" || oldHref="https://docs.expo.dev/archive/expo-cli/"
-> Opcional = baixar e instalar o "yarn". (npm install --global yarn).

**Instalação/inicialização de dependecias basicas.**
-> Criação do package.json, arquivo de configuração de dependencias do projeto. (npm init -y)
-> Instalação do Express (npm install express || yarn add express).
-> Instalação do Cors (npm install cors || yarn add cors).
-> Instalação do TypeScript (npm install --save-dev typescript).
-> Criação do arquivo de configuração do TypeScript (npx tsc -init).
-> Instalação do ts-node-dev, para startar nosso servidor em TS (npm install --save-dev ts-node-dev).
-> Opcional Instalação do Typeorm, para gerenciamento com conecções com banco de dados (npm install typeorm reflect-metadata || yarn add typeorm reflect-metadata).

**Criação do index.ts**
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import express from 'express';
import cors from 'cors';
import { exemplo, teste, apis } from './src/controllers/index.ts
# Arquivo index.ts dentro de src/controllers e responsavel por centralizar todas as funções nele, assim fragmentando e organizando, ele importa todos para ele e depois exporta em uma array.

const port = process.env.PORT || 4000; (Porta a sua escolha)

async function startApp() {
    //await connectDB; <- aqui se deve colocar o inicio da sua conecção com banco de dados, de sua escolha, por isso ele esta com um nome de ilustração.
    const app = express();
    app.use(express.json());
    app.use(cors());
    **Exemplos de Rotas**
    app.post('/exemplo', nomeMetodo); 
    app.get('/teste', nomeMetodo);
    app.get('/apis', function (req, res) {});
---------------------------------------------
    app.listen(port, () => {
        console.log('App inicializado com sucesso na porta ' + port); 
    })

}

startApp();
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Verificações necessarias**
-> Alguns import como por exemplo podem ficar em declaração de incorreto, import express from **'express'**;
    Normalmente, basta deixar o mouse em cima do mesmo que ira aparecer uma mensagem contendo **Try `npm i --save-dev @types/express`**
    Isso pode se repetir em outros casos, basta usar o comando entre as ``, no caso (npm i --save-dev @types/express).

# Criação do script para inicializar o servidor
-> No arquivo package.json, tera uma estrutura como abaixo, assim, basta adicionar uma nova linha de comando.
----------------------------------------------------------
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
----------------------------------------------------------
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsnd --respawn index.ts"
  },
----------------------------------------------------------

# Inicializando o servidor.
-> Com tudo instalado e configurado, basta rodar o comando **(npm run dev)**, assim o servidor será inicializado.
-> Para parar o servidor, basta ir no terminal e apertar CRTL + C , logo após digitar S e apertar a tecla Enter.

**Recomendações para Editor Visual Studio Code.**
-> Prittier - Code formatter
-> ESLint


