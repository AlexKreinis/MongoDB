const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const InputListSchema = new Schema({
  formName: String,
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = Item = mongoose.model('item', InputListSchema);
