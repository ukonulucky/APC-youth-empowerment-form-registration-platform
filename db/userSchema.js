const mongoose = require ("mongoose") 

const APCSchema = new mongoose.Schema({
  
membership:{
    type: String,
        required: true,
         unique: true
},
lastName:{
    type: String,
    required: true
    },

middleName:{
    type: String,
    required: true
},
dOb:{
 type: String,
 required: true
 
    },
education:{
        type: String,
        require: true
        
           },
gender:{
    type: String,
    required: true
    },
 address:{
        type: String,
        required: true
        },
 course:{
        type: String,
         required: true
     },
        
email: {
    type: String,
    required: true,
      unique:true
    },
firstName:{
        type: String,
        required: true
        },
 lga:{
   type: String,
     required: true
     },
nationality:{
        type: String,
        required: true
    },
  phone: {
  type: String,
 required: true
       },
          
state: {
    type: String,
    required: true
},

ward: {
    type: String,
    required: true
    
    },
 date: {
        type: Date,
        default: Date.now 
     }
})
 

const mySchema = mongoose.model("apcUserReg",APCSchema)
module.exports = mySchema 