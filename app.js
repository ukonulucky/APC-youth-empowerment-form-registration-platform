const cors = require("cors")
const express = require ("express")
const app = express()
const dotenv = require ("dotenv")
dotenv.config()
const dbConnect = require("./db/dbConnect")
const router = require("./routes")
app.use(express.json())
app.use(cors()) 
const Port = process.env.value||7000;
app.get("/", (req, res) => { res.send("server running") })
app.use("/apply", router)
 const connection = async(req,res)=>{
     try {
       data =  await dbConnect()
      data &&  app.listen(Port, ()=>{
             console.log("databse connected and server connected on port "+ Port)
            })
          
         
     } catch (error) {
         const errorMessage= "poor network connection"
       res.send(errorMessage)
         process.exit(1)
     }
 }


 connection()