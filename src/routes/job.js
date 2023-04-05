const Job = require('../database/models/job')
const { Router } = require('express')
const router = Router()



router.get('/jobs', async (req, res) => {
    try {
        const result = await Job.find().sort({createdAt: -1})
        res.render('home', {title: 'Home', jobs: result})
        //res.send(result)
    } catch (err) {
        console.log(err)
    }
})

router.post('/addjob', async (req, res) => {
    const newJobPost = new Job(req.body)
    try{
        await newJobPost.save()
        res.send('Ok')
    } catch (err) {
        console.log(err)
    }
})

router.delete('/deletejob', async (req, res) => {
    
})

module.exports = router