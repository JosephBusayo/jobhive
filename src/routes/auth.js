const {Router} = require('express')
const router = Router()
const User = require('../database/models/user')
const passport = require('passport')
const {hashPassword, comparePassword} = require('../utils/helper')


router.get('/login', (req, res) => {
    try {
        res.render('login', {title: 'Login'})
    } catch (err) {
        console.log(err)
    }
})
router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log("Logged in")
    res.redirect('/jobs')
    // res.sendStatus(200)
})

router.get('/register', (req, res) => {
    try {
        res.render('register', {title: 'Register'})
    } catch (err) {
        console.log(err)
    }
})
router.post('/register', async (req, res) => {
    const {email} = req.body
    console.log(req.body)
    const searchUser = await User.findOne({email})
    if (searchUser) {
        res.status(400).send({msg: 'User already exists'})
    } else {
        const password = hashPassword(req.body.password)
        const newUser = User.create({email, password})
        res.redirect('/jobs')
        // res.sendStatus(201)
    }
})

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/jobs');
    });
});


module.exports = router
