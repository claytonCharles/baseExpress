import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 4000;

async function startApp() {
    //await connectDB; <- aqui se deve colocar o inicio da sua conecção com banco de dados, de sua escolha, por isso ele esta com um nome de ilustração.
    const app = express();
    app.use(express.json());
    app.use(cors());

    // app.post('/exemplo', nomeMetodo);
    // app.get('/teste', nomeMetodo);
    // app.get('/apis', function (req, res) {});


    app.listen(port, () => {
        console.log('App inicializado com sucesso na porta ' + port); 
    })

}

startApp();