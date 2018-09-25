const express = require('express');
const router = express.Router();

//Data model

const Data = require('../../models/data');

router.get('/', (req, res) => {
  Data.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
  const {
    inputData: { formID, inputArr, labelArr }
  } = req.body;

  const newData = new Data({
    formID,
    inputArr,
    labelArr
  });
  newData
    .save()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log('Error', err));
});

module.exports = router;
