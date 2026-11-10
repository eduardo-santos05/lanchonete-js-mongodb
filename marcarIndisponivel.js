import mongoose from './conexao.js'
import Prato from './Prato.js'

let id = "6aec901e30642485ab8984ae"

let prato = await Prato.findByIdAndUpdate(id, { disponivel: false })

if (prato === null) {
    console.log("Prato não encontrado.")
} else {
    console.log(`${prato.nome} agora está indisponível.`)
}

await mongoose.disconnect()