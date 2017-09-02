'use strict';

module.exports = (app) => {

  // Define the home page route
  app.get('/', (req, res) => {
    res.render('index.pug');
  });

  // Define the portfolio page route
  app.get('/portfolio', (req, res) => {
    res.render('portfolio.pug');
  });
}
