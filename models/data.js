const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const DataSchema = new Schema({
  formID: String,
  inputArr: [String],
  labelArr: [String]
});

module.exports = Data = mongoose.model('data', DataSchema);
