import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        titulo: {
            type: String,
            required: true
        },
        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'autores',
            required: true
        },
        editora: {
            type: String,
            required: true
        },
        paginas: {
            type: Number,
        },
    }
);

const livros = mongoose.model('livros', bookSchema);

export default livros;