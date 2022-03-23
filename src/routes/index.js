const express = require('express');
const superHeroRouter = require('./superheroes.router');

function routerApi(app) {
  const router = express.Router();
  /* parte estatica del endpoint: http://localhost:5000/api/v2 */
  app.use('/api/v2', router);
  router.use('/superheroes', superHeroRouter);
}

module.exports = routerApi;