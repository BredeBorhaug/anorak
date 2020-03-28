const express = require(`express`)
const router = express.Router()
const jwt = require(`jsonwebtoken`)
const fs = require(`fs`)

var privateKey = fs.readFileSync('private.key')


// dummy user during early dev
const user = `anorak`
const pwd = `anorak`


const signOptions = {
    issuer : `anorak`,
    expiresIn : `1h`,
    algorithm : `RS256`
}

const payload = {}


router.post(`/login`, (req, res) => {
    // verify that the body is not undefined
    if( typeof req.body.username === `undefined`) res.sendStatus(400)
    if( typeof req.body.password === `undefined`) res.sendStatus(400)
    
    // validating the username and password
    if (req.body.username === user && req.body.password===pwd){
        // create the jwt and return it to the user
        payload.user = req.body.username
        payload.id = 1     
        jwt.sign(payload, privateKey, signOptions, function(err, token) {
            res.json(token)
        })
    }else{
        res.sendStatus(401)
    }
})


// TODO - Create the logout route
router.delete(`/logout`, (req, res) => {

    // req will contain the token

    // log user out


    // return 204 (no content) 



    res.sendStatus(200)
})




module.exports = {
    router
}





