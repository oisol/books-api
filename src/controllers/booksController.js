import livros from "../models/Book.js";

class BookController {
    
    static listarLivros = (req, res) => {
            livros.find((err, livros) => {
                res.status(200)
                    .json(livros)
        });
    }

}

export default BookController;