const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

// const DataSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   }
// });
const DataSchema = new Schema({
  inputData: {
    formID: {
      type: String
    },
    inputArr: [String]
  }
});

module.exports = Data = mongoose.model('data', DataSchema);
