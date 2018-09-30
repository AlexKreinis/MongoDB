const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/item');

router.get('/', (req, res) => {
  Item.find().then(items => res.json(items));
});

router.post('/', (req, res) => {
  console.log(req.body);
  //const { inputs, formName } = req.body;
  const newItem = new Item({
    formName: req.body.formName,
    inputs: req.body.inputs
  });
  newItem.save().then(item => res.json(item));
});
router.post('/increase', (req, res, next) => {
  const _id = req.body._id;

  Item.findByIdAndUpdate(
    _id,
    { $inc: { numOfSubs: 1 } },
    { new: true },
    (err, updateRes) => {
      if (err) return next(err);
      return res.json({ sucess: true });
    }
  );
});

module.exports = router;
