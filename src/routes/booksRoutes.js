import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router
    .get("/livros", BookController.listarLivros)
    .get("/livros/busca", BookController.listarLivroPorEditora)
    .get("/livros/:id", BookController.listarLivrosPorId)
    .post("/livros", BookController.cadastrarLivros)
    .put("/livros/:id", BookController.atualizarLivros)
    .delete("/livros/:id", BookController.excluirLivro)

export default router;