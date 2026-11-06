import mongoose from './conexao.js'
import Prato from './Prato.js'

const categoria = "Principal"
let pratos = await Prato.find({ categoria: categoria })

if (pratos === null) {
    console.log(`Nenhum prato na categoria ${categoria}`)
} else {
    console.log(`${categoria}: ${pratos.length} prato(s)`)
    pratos.forEach((prato) => {
        console.log(` - ${prato.nome}: R$ ${prato.preco}`)
    })
}

await mongoose.disconnect()