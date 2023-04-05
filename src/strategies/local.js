const { Router } = require('express')
const router = Router()
const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../database/models/user')
const { hashPassword, comparePassword } = require('../utils/helper')



passport.use(
    new Strategy(
        {
            usernameField: 'email'
        },
        async(email, password, done)=> {
            try{
                if(!email || !password) throw new Error('Missing Credentials')

                const searchUser = await User.findOne({ email })
                if(!searchUser) throw new Error('User not found')

                const isValid = comparePassword(password, searchUser.password)
                if(isValid) {
                    console.log('Authenticated Sucessfully')
                    done(null, searchUser)
                }else{
                    console.log('Authentication Failure')
                    done(null, null)
                }
            }catch(err){
                console.log(err)
                done(err, null)
            }
        }
    )
)


module.exports = router
