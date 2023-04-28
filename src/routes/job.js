const Job = require('../database/models/job')
const {Router} = require('express')
const router = Router()


router.get('/', async (req, res) => {
    try {
        const result = await Job.find().sort({createdAt: -1})
        if (req.user) {
            res.render('home', {
                title: 'Home',
                jobs: result,
                display: true
            })
            // res.send(result)
        } else {
            res.render('home', {
                title: 'Home',
                jobs: result,
                display: false
            })
        }
    } catch (err) {
        console.log(err)
    }
})

// ADD
router.get('/add', (req, res) => {
    try {
        res.render('addjob')
    } catch (err) {
        console.log(err)
    }
})
router.post('/add', async (req, res) => {
    const newJobPost = new Job(req.body)
    try {
        await newJobPost.save()
        res.redirect('/jobs')
    } catch (err) {
        console.log(err)
    }
})


// DETAIL
router.get('/detail/:id', async (req, res) => {
    const id = req.params.id
    const result = await Job.findById(id)
    try {
        if (req.user) {
            res.render('detail', {
                title: 'Detail',
                job: result,
                display: true
            })
        } else {
            res.render('detail', {
                title: 'Detail',
                job: result,
                display: false
            })
        }
    } catch (err) {
        console.log(err)
    }
})


// DELETE
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    Job.findByIdAndDelete(id).then((result) => {
        res.json({redirect: '/jobs'})
    }).catch(err => {
        console.log(err)
    })
})
// EDIT
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id
    const result = await Job.findById(id)
    try {
        res.render('edit', {
            title: 'Edit',
            job: result
        })
    } catch (err) {
        console.log(err)
    }
})
router.put('/:id/edit', async (req, res) => {
    const id = req.params.id
    const updateJob = {
        ...req.body
    };
    delete updateJob._id;

    try {
        await Job.findByIdAndUpdate(id, updateJob)
        res.redirect('/jobs')
    } catch (err) {
        console.log(err)
    }
})

/* router.delete('/delete-job/:id', async (req,res) => {
    const {id }= req.body
    try{
        await Job.findByIdAndDelete(id)
        res.redirect('/jobs')
    }catch(err) {
        console.log(err)
    }
}) */


module.exports = router
