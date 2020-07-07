// Graduates Router
const express = require('express'),
    router = express.Router();

const Graduate = require('../models/graduate')

//Get all graduates
router.get('/', async (req, res) => {
    try {
        const allGrads = await Graduate.find()
        return res.status(200).json(allGrads)
    }
    catch (err) {
       return res.status(500).json({message: err.message})
    }
})



//Create a new graduate
router.post('/', async (req, res) => {
    console.log('Attempting post')
    console.log(req.body)
    const { firstname, lastname, email } = req.body;
    const newGrad = new Graduate({
        firstname,
        lastname,
        email
    })
    try {
        const saveGraduate = await newGrad.save();
        res.send(201).json(saveGraduate)
    }
    catch (err) {
        res.send(401).json({message: err.message})
    }
})




//Export router

module.exports = router;