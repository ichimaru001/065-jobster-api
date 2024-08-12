require('dotenv').config()

const mockData = require('./mock-data-json.json')

const Job = require('./models/Job')
const connectDB = require('./db/connect')

const start = async(req,res)=>{
  try {
    await connectDB(process.env.MONGO_URI)
    await Job.create(mockData)
    console.log('Successfully populated the database')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()