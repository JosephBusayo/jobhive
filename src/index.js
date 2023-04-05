require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const DB = require('./database/index')

//passport strategies
require('./strategies/local')
require('./strategies/github')
//routes
const jobRoute = require('./routes/job')
const authRoute = require('./routes/auth')


const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(
    session({
        secret : "ADDFERMTYY2",
        resave: false,
        saveUninitialized : false,
        store : MongoStore.create({
            mongoUrl : process.env.MONGO_URI
        })
    })
)
app.use(passport.initialize())
app.use(passport.session())


//routes
app.use('/', jobRoute)
app.use('/auth', authRoute)



DB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})













/* app.get('/add-job', (req, res) => {
    const job = new Job({
        title: 'Job 1',
        desc : 'Bla bla bla',
        tag : ['remote'],
        link: 'kininkan.com'
    })
    job.save()
        .then((result) => { res.send(result) })
        .catch((err) => { console.log(err) })
})  */