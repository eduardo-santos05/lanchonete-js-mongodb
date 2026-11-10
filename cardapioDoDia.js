import mongoose from './conexao.js'
import Prato from './Prato.js'

let pratos = await Prato.find({ disponivel: true })

console.log("======== Cardápio do dia ========")

if (pratos === null) {
    console.log("Nenhum prato disponível encontrado")
} else {
    let somaPrecos = 0
    pratos.forEach((prato) => {
        console.log(` - ${prato.nome} (${prato.categoria}): ${prato.preco}`)
        somaPrecos += prato.preco
    })

    let precoMedio = somaPrecos/pratos.length
    console.log(`Pratos disponíveis: ${pratos.length}`)
    console.log(`Preço médio: R$ ${precoMedio}`)
}

await mongoose.disconnect()