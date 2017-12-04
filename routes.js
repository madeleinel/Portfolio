'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('layout.pug');
  });
}
