import express from 'express';

const app = express();

// Ler o que é passado via json
app.use(express.json());

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

// Rota de livros
app.get('/livros', (req, res) => {
    res.status(200)
        .json(livros)
});

// Rota de Criar livros
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201)
        .send('Livro cadastrado com sucesso!');
});

export default app;