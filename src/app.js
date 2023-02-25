import express from 'express';

const app = express();

// Ler o que é passado via json
app.use(express.json());

// Mock temporario
const livros = [
    {
        id: 1,
        'titulo': 'senhor dos aneis'
    },
    {
        id: 2,
        'titulo': 'o hobbit'
    }
];

// Home
app.get('/', (req, res) => {
    res.status(200)
        .send('HOME')
});

// Rota de RETORNAR livros
app.get('/livros', (req, res) => {
    res.status(200)
        .json(livros)
});

// Rota de RETORNAR POR ID 
app.get('/livros/:id', (req, res) => {
    // Usa o id passado no parametro
    let index = buscaLivro(req.params.id);
    // Retorna livro que id foi passado
    res.json(livros[index])
});

// Rota de CRIAR livros
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201)
        .send('Livro cadastrado com sucesso!');
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

// Funçoes
const buscaLivro = (id) => {
    return (
        livros.findIndex(livro => livro.id == id)
    )
};

export default app;