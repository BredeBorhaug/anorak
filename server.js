const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
//const bodyParser = require('body-parser')



const app = express()
const port = process.env.PORT // || 3010;

// require routes
const auth = require(`./server/auth/auth`)
const cms = require(`./server/cms/cms`)
const configure = require(`./server/configure/configure`)

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// set up the routes
app.use(`/api/auth`, auth.router)
app.use(`/api/cms`, cms.router)
app.use(`/api/configure`, configure.router)




app.listen(port, () => console.log(`Listening on port ${port}`));