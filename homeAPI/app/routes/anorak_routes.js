// anorak.js
module.exports = function(app, db) {
    app.post('/anorak', (req, res) => {      
      console.log(req.body)
      res.send('Hello from Anorak')
    });
  };