import mongoose from './conexao.js'
import Prato from './Prato.js'

let id = "6aec901e30642485ab8984ac"

let novoPreco = 38

let prato = await Prato.findByIdAndUpdate(id, { preco: novoPreco })

if (prato === null) {
    console.log("Prato não encontrado")
} else {
    console.log(`${prato.nome}: novo preço R$ ${novoPreco}`)
}

await mongoose.disconnect()