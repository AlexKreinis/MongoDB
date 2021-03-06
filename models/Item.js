//create Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  formName: String,
  inputs: [
    {
      inputLabel: {
        type: String,
        required: true
      },

      inputType: {
        type: String,
        required: true,
        enum: ['text', 'color', 'date', 'email', 'tel', 'number']
      },

      inputValue: {
        type: String,
        required: true
      }
    }
  ],
  numOfSubs: { type: Number, default: 0 }
});

module.exports = Item = mongoose.model('item', ItemSchema);
