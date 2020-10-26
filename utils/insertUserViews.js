const mongoose = require('mongoose');
const ViewModel = require('../models/View');


const getDates = function(from, to) {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from));
}

const startDate = new Date('2020-09');
const endDate = new Date();

const rec = [
    { ProductId: '1', UserId: '1', ViewDate: getDates(startDate,endDate) },
    { ProductId: '1', UserId: '2', ViewDate: getDates(startDate,endDate) },
    { ProductId: '1', UserId: '3', ViewDate: getDates(startDate,endDate) },
    { ProductId: '2', UserId: '4', ViewDate: getDates(startDate,endDate) },
    { ProductId: '2', UserId: '5', ViewDate: getDates(startDate,endDate) },
    { ProductId: '3', UserId: '1', ViewDate: getDates(startDate,endDate) },
    { ProductId: '3', UserId: '1', ViewDate: getDates(startDate,endDate) },
    { ProductId: '3', UserId: '1', ViewDate: getDates(startDate,endDate) },
    { ProductId: '4', UserId: '2', ViewDate: getDates(startDate,endDate) },
    { ProductId: '5', UserId: '3', ViewDate: getDates(startDate,endDate) },
    { ProductId: '5', UserId: '3', ViewDate: getDates(startDate,endDate) },
    { ProductId: '6', UserId: '4', ViewDate: getDates(startDate,endDate) },
    { ProductId: '6', UserId: '4', ViewDate: getDates(startDate,endDate) },
    { ProductId: '6', UserId: '4', ViewDate: getDates(startDate,endDate) },
    { ProductId: '7', UserId: '4', ViewDate: getDates(startDate,endDate) },
    { ProductId: '7', UserId: '5', ViewDate: getDates(startDate,endDate) },
    { ProductId: '7', UserId: '5', ViewDate: getDates(startDate,endDate) },

];
ViewModel.insertMany(rec,function(error, docs) {
    if(error){
        console.log(`Error Occurs during inserting data....`);
    } else {
        console.log(`Data inserted successfully....`);
    }
})