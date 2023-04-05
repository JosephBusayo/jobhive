const { Router } = require('express')
const router = Router()
const User = require('../database/models/user')
const passport = require('passport')
const { hashPassword, comparePassword } = require('../utils/helper')



router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log("Logged in")
    res.sendStatus(200)
})
router.post('/register', async (req, res) => {
    const { email } = req.body

    const searchUser = await User.findOne( {email} )
    if(searchUser){
        res.status(400).send( {msg : 'User already exists'} )
    }else{
        const password = hashPassword(req.body.password)
        const newUser = User.create( {email, password} )
        res.sendStatus(201)
    }
})


module.exports = router