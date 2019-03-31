const db = require('../data/dbConfig.js');

const findById = id => {
  return db('Projects')
    .where({ id })
    .first();
}

addAction = action => {
  return db('Actions')
    .insert(action)
    .then(ids => findById(ids[0]));
}

const getActions = () => db('Actions');


module.exports = {
  findById,
  addAction,
  getActions
}