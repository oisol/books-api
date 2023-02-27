import express from 'express';
import AuthorController from '../controllers/authorsController.js';

const router = express.Router();

router
    .get("/autores", AuthorController.listarAutores)
    .get("/autores/:id", AuthorController.listarAutoresPorId)
    .post("/autores", AuthorController.cadastrarAutores)
    .put("/autores/:id", AuthorController.atualizarAutores)
    .delete("/autores/:id", AuthorController.excluirAutores)

export default router;