const express = require('express'),
router = express.Router(),
Post = require('../models/Post');
//HTTP Get request that responds with all the data.
router.get('/', async (req, res) => {
    console.log('On posts route : Home')
    //console.log(allPosts)
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
        
    }
    catch (err) {
        res.json({message: err})
    }

})


// Create a post route for ironically the POSTS route!


router.post('/', async  (req, res) => {
    const post = new Post({
        name: req.body.name,
        content: req.body.content
    })
   
    try {
        const savedPost = await post.save()
        res.json(savedPost) 
        console.log('Sending post response')
    } 
    catch (err) { 
        res.json({
            message: err
        })
    }
})



// Create a patch route to update an existing post based from the given mongoose '__id' property.

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {__id: req.params.id},
            {
                $set: {
                    title:req.body.title
                }
            }
        )
        res.json(updatedPost)
    }  catch (err) {
        res.json({message: err})
    }
})





//Delete a post with the same id

router.delete('/:postId', async (req, res) => {
   try {
    const removedPost = await Post.remove({__id: req.params.postId});
    res.json(removedPost)
   }
   catch (err){
    res.json({message: err})
}

})









module.exports = router