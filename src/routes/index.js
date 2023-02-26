import express from 'express';
import livros from "./booksRoutes.js"

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send({
                titulo: "Home"
            })
        })

        app.use(
            express.json(),
            livros
        )
};

export default routes;