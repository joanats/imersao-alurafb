import express from "express"; //Importa o módulo express, uma biblioteca Node.js usada para criar servidores web de maneira simples e rápida.
import routes from "./src/routes/postsRoutes.js";

const app = express(); //Inicializa uma instância do Express e a armazena na constante app. Essa instância é o núcleo do servidor, responsável por configurar e gerenciar rotas, middlewares e outras funcionalidades.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { //Inicia o servidor e faz com que ele escute requisições na porta 3000.
    console.log("Servidor escutando...");
});