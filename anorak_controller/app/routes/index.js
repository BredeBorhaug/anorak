// routes/index.js
const anorakRoutes = require('./anorak_routes');
const echoRoutes = require('./echo_routes');


module.exports = function(app, db) {
  anorakRoutes(app, db);
  echoRoutes(app);
  // Other route groups could go here, in the future
};