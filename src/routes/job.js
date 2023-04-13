const Job = require('../database/models/job')
const { Router } = require('express')
const router = Router()


router.get('/', async (req, res) => {
    try {
        const result = await Job.find().sort({createdAt: -1})
        if(req.user){
            res.render('home', {title: 'Home', jobs: result, display: true})
            //res.send(result)
        }else{
            res.render('home', {title: 'Home', jobs: result, display: false})
        }
    } catch (err) {
        console.log(err)
    }
})



router.get('/add', (req, res) => {
    try{
        res.render('addjob')
    }catch(err){
        console.log(err)
    }
})

router.post('/add', async (req, res) => {
    const newJobPost = new Job(req.body)
    try{
        await newJobPost.save()
        res.redirect('/jobs')
    } catch (err) {
        console.log(err)
    }
})

router.delete('/deletejob', async (req, res) => {
    
})

module.exports = router