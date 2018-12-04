// anorak.js
module.exports = function(app) {
    app.post('/echo', (req, res) => {      
      console.log(req.body)
      res.send(req.body)
    });
  };