import mongoose from './conexao.js'
import Prato from './Prato.js'

await Prato.create({
    nome: 'Batata frita',
    categoria: 'Entrada',
    preco: '25',
    disponivel: true
})

await Prato.create({
    nome: 'Hambúrguer',
    categoria: 'Principal',
    preco: 35,
    disponivel: true
})

await Prato.create({
    nome: 'Cheeseburguer',
    categoria: 'Principal',
    preco: 42,
    disponivel: true
})

await Prato.create({
    nome: 'Brownie',
    categoria: 'Sobremesa',
    preco: 16,
    disponivel: true
})

console.log("Cardápio cadastrado!")

await mongoose.disconnect()