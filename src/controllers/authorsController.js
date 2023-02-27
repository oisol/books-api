import autores from '../models/Author.js'

class AuthorController {
    
    static listarAutores = (req, res) => {
            autores.find((err, autores) => {
                res.status(200)
                    .json(autores)
        });
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400)
                    .send({message: `${err.message} - Id do autor não existe`})
            } else {
                res.status(200)
                    .send(autores)
            }
        })
    }

    static cadastrarAutores = (req, res) => {
        let author = new autores(req.body);

        author.save((err) => {
            if(err) {
                res.status(500)
                    .send({
                        message: `${err.message} - falha ao cadastrar autor.`
                    })
            } else {
                res.status(201)
                    .send(author.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200)
                    .send({message: 'Autir atualizado com sucesso'})
            } else {
                res.status(500)
                    .send({message: err.message})
            }
        })
    } 

    static excluirAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200)
                    .send({message: "Autor removido com sucesso"})
            } else {
                res.status(500)
                    .send({message: `${err.message}`})
            }
        })
    }
    
}

export default AuthorController;