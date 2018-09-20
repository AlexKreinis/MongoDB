const express = require('express');
const router = express.Router();

//Data model

const Data = require('../../models/data');

router.get('/', (req, res) => {
  Data.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
  const newData = new Data({
    name: req.body.name
  });
  newData.save().then(data => res.json(data));
});

module.exports = router;
