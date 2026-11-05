import mongoose from 'mongoose'

let pratoSchema = new mongoose.Schema({
    nome: { type: String },
    categoria: { type: String },
    preco: { type: Number },
    disponivel: { type: Boolean }
})

const Prato = mongoose.model('Prato', pratoSchema)

export default Prato