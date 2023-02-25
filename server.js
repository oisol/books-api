const http = require("http");
const PORT = 3000;

// Routes
const routes = {
    '/': 'Curso de node',
    '/livros': 'Pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Listagem de editoras',
    '/sobre': 'Info sobre projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
});

server.listen(PORT), () => {
    console.log(`Servidor Rodando na Porta ${PORT}`)
};