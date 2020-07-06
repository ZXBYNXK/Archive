const express = require('express'),
router = express.Router(); //<---Pascal Case 



router.get('/', (req, res) => {
    console.log('Visited post route')
    res.json({
        "message":"on posts route"
    })
    res.send('On careerdevs Post!')
})



router.get



module.exports = router