import mongoose from './conexao.js'
import Prato from './Prato.js'

let pratos = await Prato.find()

console.log(`Pratos no cardápio: ${pratos.length}`)

let posicao = 0

pratos.forEach((prato) => {
    console.log(`[${posicao++}] ${prato._id}`)
    console.log(`   ${prato.nome} (${prato.categoria}): R$ ${prato.preco}`)
})

await mongoose.disconnect()