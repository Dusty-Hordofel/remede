const mongoose = require('mongoose')
const databaseUrl = process.env.DATABASE_URL ||"mongodb+srv://hordofel:maman123@cluster0.wamlk.mongodb.net/argentBankDB"
  // || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true ,useUnifiedTopology: true})
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
