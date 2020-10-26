const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewSchema = new Schema(
  {
    UserId: {
      type: String,
      required: true
    },
    ProductId: {
      type: String,
      required: true
    },
    ViewDate: {
      type: Date,
      required: true,
      default: new Date()
    },
  })

const viewModel = mongoose.model('View', viewSchema);
module.exports = viewModel;