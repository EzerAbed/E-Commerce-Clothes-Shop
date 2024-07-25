const router = require("express").Router()

//importing the controllers
const { createNewUser, getAllUsers, deleteUserById, verifyUserExists, upadatUserPassword } = require('../Controllers/User')


//GET Requists
router.get("/", getAllUsers)

//POST Requists
router.post("/signup", createNewUser)
router.post('/login', verifyUserExists)
router.post('/editPassword', upadatUserPassword)

//PUT Requists

//DELETE Requists
router.delete("/delete/:id", deleteUserById)

module.exports = router