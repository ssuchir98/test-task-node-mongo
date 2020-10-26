
const moment = require('moment');
const lodash = require('lodash');

const ViewModel = require('../models/View');

async function getReprting(req, res, next) {

  const startDate = req.query.startDate ? new Date(req.query.startDate) : new Date('0');
  const endDate = req.query.endDate ? new Date(req.query.endDate) : new Date();
  await ViewModel.aggregate([
    { $match: { 'ViewDate': { $gte: startDate, $lt: endDate } } },
    {
      $group: { _id: '$ProductId', uniq_users: { $addToSet: "$UserId" }, nusers: { $push: "$UserId" } }
    }, {
      $addFields: { total_users: { $size: "$nusers" }, uniq_users_count: { $size: '$uniq_users' } }
    }
  ], function (err, response) {
    if (err) {
      const errorObj = {
        message: err.message,
        statusCode: 500
      };
      return next(errorObj);
    }

    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  });

};

module.exports = {
  getReprting
};

