// Import requires
require('dotenv').config()
const express = require(`express`)
const router = express.Router()
const path = require ('path')
const jwt = require('jsonwebtoken')
const fs = require('fs')



// Private key (must read utf8)
const privatekey = fs.readFileSync("./private.key", "utf8")
// Public key (must read utf8)
const publickey = fs.readFileSync("./public.key", "utf8")

let payload = {}

// Mock data
const dataForPayload = {
  id: "fff5ef43-586b-404f-aede-70616dba7805",
  customer: "brede@borhaug.io",
}

payload.field01 = dataForPayload
// payload.field02 = [OTHER DATA IF YOU NEED]

// Create the values for the rfc7519 fields and the checks in verifyer
const iss = "Borhaug Studios"
const sub = "appOwner@user.org"
const aud = "http://borhaug.io"

// set the expiration time for the token
const exp = "365d"

// Set the signature options
const signOptions = {
  issuer : iss,
  subject : sub,
  audience : aud,
  expiresIn : exp,
  algorithm : "RS256"
}



router.get('/', (req, res, next) => {
    res.json({ message: 'Ping from auth'})
    next()
})



// Protected API endpoint to test the authentication midleware
router.get('/protected', authenticateToken, encryptData, (req, res) => {
  const authData = res.authData
   res.json(
   {
       authData
   })
});


// Create a token based on the ACCESS_TOKEN_SECRET stored in .env
router.post('/createtoken', (req, res) =>{ 
  jwt.sign(payload, privatekey, signOptions, (err, token) => {
       res.json({
           token
       })
   })
})

// Midlewear to sign data
 function encryptData(res, req, next){
  console.log(res.authData)
  next()
}


// Midlewear to authenticate the token on the requests
 function authenticateToken(req, res, next) {
  // Grab the authorization token
  const bearerHeader = req.headers['authorization']    
  // Check that token exist in request
  if ( typeof bearerHeader === 'undefined')return res.sendStatus(401) // there is no token
  // Extract the token and store the token
  const bearerToken = bearerHeader.split(' ') [1]
  req.token = bearerToken
  // Verify the token with secret and store the data in authData
  jwt.verify(req.token, publickey, signOptions, (err, authData) => {
      if(err) {
          res.sendStatus(403)
      } 
      // Check the audience, issuer and 
      if (authData.aud !== aud && authData.iss !== iss){
          res.sendStatus(403)
      }
      res.authData = authData
      next()    
  });
}







module.exports = {
    router,
    authenticateToken,
    encryptData
}
