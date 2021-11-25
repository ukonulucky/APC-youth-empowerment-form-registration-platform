const express = require ("express")
 const mySchema = require("./db/userSchema") 
const router = express.Router()


router.post("/user", async (req, res) => {
    try {
        const newFieldForMembership = await mySchema.find({
            membership: req.body.membership
        })
        const newFieldForEmail = await mySchema.find({
            email: req.body.email
        })
       
        if (newFieldForMembership.length > 0) {
            // checking if the value inputed for the membership key exist in the cluster
            res.json(`failed to submit, user with memebership i.d ${newFieldForMembership[0].membership} all ready exist`)
          
        }
       else if (newFieldForEmail.length > 0) {
            // checking if the value inputed for the membership key exist in the cluster
            
            res.json(`failed to submit, user with email ${newFieldForEmail[0].email} allready exist`)
          
        }
        else {
            const regInfo = new mySchema({
                membership: req.body.membership,
                lastName: req.body.lastName,
                middleName: req.body.middleName,
                dOb: req.body.dob,
                education: req.body.education,
                gender: req.body.gender,
                address: req.body.address,
                course: req.body.course,
                email: req.body.email,
                firstName: req.body.firstName,
                lga: req.body.lga,
                nationality: req.body.nationality,
                phone: req.body.phone,
                state: req.body.state,
                ward: req.body.ward
                    
            })
          await  regInfo.save();
            res.json("Data submission successful")
        }
         
       
          
    } catch (error) {
        res.json(error.message)
    }
})
module.exports = router