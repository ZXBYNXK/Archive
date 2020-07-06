const express = require('express'),
router = express.Router()
Post = require('../models/Post');


router.get('/', (req, res) => {
    res.json({
        "Message": "On posts root route"
    })

})



router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        console.log('Sent post request')
        res.json(savedPost)
    }
    catch(err){
        res.json({message: err})
        console.log(`Post error: ${err}`)
    }
    
})


module.exports = router


