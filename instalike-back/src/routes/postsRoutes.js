// Importa o módulo express para criar rotas e lidar com requisições HTTP
import express from "express";

// Importa o módulo multer para lidar com uploads de arquivos
import multer from "multer";

// Importa as funções do controlador de posts que serão usadas nas rotas
import { listarPosts, postarNovoPost, uploadImagem, atualizaUmNovoPost } from "../controllers/postsController.js";
import cors from "cors"

const corsOptions = {
    origin:"http://localhost:8000", 
    optionsSuccessStatus: 200
}

// Configura o armazenamento de arquivos no multer, definindo o destino e o nome do arquivo
const storage = multer.diskStorage({
    // Define a pasta onde os arquivos serão salvos
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    // Define o nome do arquivo salvo no servidor (mantém o nome original)
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Configura o multer com a pasta de destino padrão e as configurações de armazenamento
const upload = multer({ dest: "./uploads", storage });

// Define as rotas do aplicativo
const routes = (app) => {
    // Configura o express para entender requisições com JSON no corpo
    app.use(express.json());
    app.use(cors(corsOptions))

    // Rota para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    // Rota para fazer upload de imagens associadas a posts
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizaUmNovoPost)
}

// Exporta o módulo de rotas para ser utilizado no servidor principal
export default routes;
