import express from 'express';

const app = express();

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

app.get('/', (req, res) => {
    res.status(200).send('HOME')
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
});

export default app;