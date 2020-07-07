//Route handler library.
const express = require('express');
router = express.Router();

const lib = {
        postRequest1: (req, res, next) => {
           if(res && req){
            express.json(res.body)
            return
        }
            next();
        }
    }

module.exports = lib;