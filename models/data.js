const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const DataSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Data = mongoose.model('data', DataSchema);
