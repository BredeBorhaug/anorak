require('dotenv').config()
const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

const PORT = 3010;



// Mock data
const user = {
  id: 1,
  username: "brede",
  email: "brede@borhaug.io",
}


/**
 * Set up the alive endpoint
 */
app.get("/api/system", (req, res) => {
    res.send("Anorak server alive");
  });


// Protected API endpoint to test the authentication midleware
app.get('/api/protected', authenticateToken, (req, res) => {
  const authData = res.authData
   res.json(
   {
       authData
   })
});


// Create a token based on the ACCESS_TOKEN_SECRET stored in .env
app.post('/api/createtoken', (req, res) =>{ 
  jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h'}, (err, token) => {
       res.json({
           token
       })
   })
})


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
   jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
       if(err) {
           res.sendStatus(403)
       } 
       res.authData = authData
       next()    
   });
}


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});