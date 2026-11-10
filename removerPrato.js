import mongoose from './conexao.js'
import Prato from './Prato.js'

let id = "6aec901e30642485ab8984ab"

let prato = await Prato.findByIdAndDelete(id)

if (prato === null) {
    console.log("Prato não encontrado")
} else {
    console.log(`Prato removido: ${prato.nome}`)
}

await mongoose.disconnect()