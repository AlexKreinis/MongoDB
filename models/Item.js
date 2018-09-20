const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
  formName: String,
  inputs: [
    {
      inputLabel: {
        //type: String,
        // required: true
      },

      inputType: {
        // type: String,
        // required: true,
        // enum: ['text', 'color', 'date', 'email', 'tel', 'number']
      },

      inputValue: {
        // type: String,
        // required: true
      }
    }
  ]
});

module.exports = Item = mongoose.model('item', ItemSchema);
