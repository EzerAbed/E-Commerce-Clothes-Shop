const router = require("express").Router()

//importing the controllers
const { createNewUser, getAllUsers, deleteUserById, verifyUserExists } = require('../Controllers/User')


//GET Requists
router.get("/", getAllUsers)

//POST Requists
router.post("/signup", createNewUser)
router.post('/login', verifyUserExists)
//PUT Requists

//DELETE Requists
router.delete("/:id", deleteUserById)

module.exports = router