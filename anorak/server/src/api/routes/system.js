const express = require(`express`)
const router = express.Router()
const auth = require(`./auth`)


/**
 * Set up the alive endpoint
 */
router.get("/", (req, res) => {
    res.send("Anorak server alive");
});

router.get(`/health`, auth.authenticateToken, (req, res) => {
    res.send(`Able to do health chack usig JWT`)
})


module.exports = router