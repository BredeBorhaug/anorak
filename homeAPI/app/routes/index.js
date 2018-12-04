// routes/index.js
const anorakRoutes = require('./anorak_routes');


module.exports = function(app, db) {
  anorakRoutes(app, db);
  // Other route groups could go here, in the future
};