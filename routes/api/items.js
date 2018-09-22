const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/item');

router.get('/', (req, res) => {
  Item.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
  console.log(req.body);
  const newItem = new Item({
    input: req.body
    // inputLabel: req.body.inputLabel,
    // inputType: req.body.inputType,
    // inputValue: req.body.inputValue
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;
