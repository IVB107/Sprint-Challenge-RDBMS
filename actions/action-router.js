const router = require('express').Router();
// const knex = require('knex');
const Actions = require('./action-model.js');


router.post('/', async (req, res) => {
  try {
    const action = await Actions.addAction(req.body);
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.getActions();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json(err);
  }
})



module.exports = router;