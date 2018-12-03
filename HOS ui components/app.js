const express = require('express')
const app = express()
const {serverConfig} = require('./config.js'); // Load only server config from our config file.

const port = serverConfig.port;

app.get('/', (req, res) => {
    res.send('Welcome Home!');
    console.log('Server responding to /');
})


app.get('/status', (req, res) => {
    console.log('Status unknown');
})


app.listen(port, () => console.log(`HOS UI listening at port ${port}!`))