const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

//  const MONGO_URL = "mongodb+srv://apc:12345@cluster0.s5h5f.mongodb.net/apc?retryWrites=true&w=majority"

  const dbConnect= async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongodb connected to database`);
        return db;
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = dbConnect