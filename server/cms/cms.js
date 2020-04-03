const express = require(`express`)
const router = express.Router()


// to be removed
router.get('/hello', (req, res) => {
    res.send({ express: 'Hello from Anorak' });
});

router.post('/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


module.exports = {
    router
}