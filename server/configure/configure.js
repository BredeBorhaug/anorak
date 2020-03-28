const express = require(`express`)
const router = express.Router()
const crypto = require(`crypto`)
const fs = require(`fs`)


router.post(`/init`, (req, res) => {
    
    // 
    // create private / public key pair
    //
    // Check if files exist
    
    if (fs.existsSync(`./private.key`) != true && fs.existsSync(`./public.key`) != true){   
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicExponent: 3,
            publicKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem'
            }
        })
      
      fs.writeFile(`private.key`, privateKey, (err) => {
        if (err) res.sendStatus(401)
      })
      fs.writeFile(`public.key`, privateKey, (err) => {
        if (err) res.sendStatus(401)
      })
      res.sendStatus(200)
    }else{
        res.sendStatus(409).send(`Private or public keys already exist. Delete them from disk, and run init again.`)
    } 

})




module.exports = {
    router
}





