import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Book.js'
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("conexão com banco de dados feita com sucesso")
});

const app = express();
// Ler o que é passado via json
app.use(express.json());

routes(app);

// Mock temporario
// const livros = [
//     {
//         id: 1,
//         'titulo': 'senhor dos aneis'
//     },
//     {
//         id: 2,
//         'titulo': 'o hobbit'
//     }
// ];

// Rota de RETORNAR POR ID 
app.get('/livros/:id', (req, res) => {
    // Usa o id passado no parametro
    let index = buscaLivro(req.params.id);
    // Retorna livro que id foi passado
    res.json(livros[index])
});

// Rota de ATUALIZAR livros
app.put('/livros/:id', (req, res) => {
    // Usa o id passado no parametro
    let index = buscaLivro(req.params.id);
    // titulo da index retornado pela função setando titulo
    livros[index].titulo = req.body.titulo;
    // Retornar lista atualizada
    res.json(livros)
});

// Rota de EXCLUIR livros
app.delete('/livros/:id', (req, res) => {
    // Variavel que pega id por desestruturação
    let {id} = req.params;
    // Usa o id passado no parametro
    let index = buscaLivro(id);
    // Apagar via splice, com parametros de index e quantas exclusões serão feitas
    livros.splice(index, 1)
    // Retornar lista atualizada
    res.send(`Livro ${id} removido com sucesso`);
});

// Funçoes
const buscaLivro = (id) => {
    return (
        livros.findIndex(livro => livro.id == id)
    )
};

export default app;