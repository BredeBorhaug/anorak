require('dotenv').config()
const express = require('express')
const path = require ('path')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = express()
const PORT = 3010


// Import routes
const auth = require(`./api/routes/auth`)
const system = require(`./api/routes/system`)

// set up the routes
app.use(`/api/auth`, auth.router)
app.use(`/api/system`, system)



// Set up and start application
app.use(express.json())





app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});