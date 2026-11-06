import mongoose from './conexao.js'
import Prato from './Prato.js'

let id = '6aec901e30642485ab8984ad'

let prato = await Prato.findById(id)

if (prato === null) {
    console.log("Prato não encontrado")
} else {
    console.log("Prato:", prato.nome)
    console.log("Categoria:", prato.categoria)
    console.log("Preço: R$", prato.preco)
}

await mongoose.disconnect()