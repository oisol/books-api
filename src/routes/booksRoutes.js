import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router
    .get("/livros", BookController.listarLivros)

export default router;