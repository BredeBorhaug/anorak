const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT // || 3010;

// require routes
const auth = require(`./server/auth/auth`)
const configure = require(`./server/configure/configure`)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up the routes
app.use(`/api/auth`, auth.router)
app.use(`/api/configure`, configure.router)

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Anorak' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});



app.listen(port, () => console.log(`Listening on port ${port}`));