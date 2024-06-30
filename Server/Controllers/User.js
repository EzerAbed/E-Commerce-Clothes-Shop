const userSchema = require('../Models/User')
const userValidation = require('../Validation/User')
const bcrypt = require("bcrypt")

//Creating a new user
const createNewUser = async (req, res) =>{
    //verify that the req is as wanted
    let { error, value } = userValidation.validate(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const newUser = await userSchema.create(req.body)
        res.status(201).json(newUser)
    } catch (e) {
        if(e.code == 11000 && e.keyPattern.username){
            res.status(400).json({message : "The Username Already exists !"})
        } else if (e.code == 11000 && e.keyPattern.email){
            res.status(400).json({message : "This Email has already been used !"})
        } else {
            res.status(500).json({message : e.message})
        }
    }
}

//Get all user 
const getAllUsers = async (req,res) => {
    try{
        let users = await userSchema.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({ message : "Unexpected Server Error" })
    }
}

//delete user by id 
const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await userSchema.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: `Item with id: ${userId} not found. Please verify your information and retry.` });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" });
    }
}

//verify that a user that wanna log in exsites
const verifyUserExists = async (req,res) => {
    const { email, password } = req.body
    try{
        //finding user by email
        const user = await userSchema.findOne({ email })
        if(!user){
            return res.status(404).json({ message : 'the email or the password is incorrect' })
        }

        //verify that the password is correct 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'the email or the password is incorrect' });
        }

        res.json({ user: { id: user._id, 
                email: user.email, 
                username: user.username, 
                createdAT : user.createdAt,
                profileImage : user.profileImage,
                phoneNumber : user.phoneNumber,
                adress : user.adress,
                facebook : user.facebook,
                twitter : user.twitter,
                instagram : user.instagram } })
    }catch(error){
        res.status(500).json({message : error.message})
    }
}


//exporting all controllers 
module.exports = {
    createNewUser,
    getAllUsers,
    deleteUserById,
    verifyUserExists
}