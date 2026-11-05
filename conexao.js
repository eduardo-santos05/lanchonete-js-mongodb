import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

await mongoose.connect(process.env.MONGO_URI, { dbName: "lanchonete" })
console.log("Conectado ao MongoDB.")

export default mongoose