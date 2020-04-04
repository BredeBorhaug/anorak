const express = require(`express`)
const router = express.Router()


// to be removed
router.get('/hello', (req, res) => {
    res.send({ express: 'Hello from Anorak' });
});



module.exports = {
    router
}