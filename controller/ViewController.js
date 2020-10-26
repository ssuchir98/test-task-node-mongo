const ViewService = require('../Service/viewService');

module.exports = (app) => {
   app.get('/getReport', (req, res, next) => {
    ViewService.getReprting(req, res, (err) => {
      if(err) {
        return next(err);
      }

      return next();
    });
  })
};