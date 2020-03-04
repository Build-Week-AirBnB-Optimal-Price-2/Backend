const db = require('../database/dbConfig.js');

module.exports = {
  addData,
  find,
  findBy,
  findById,
};

function find() {
  return db('data').select('*');
}

function findBy(filter) {
  return db('data').where(filter);
}

async function addData(newData, id) {
    const trueData = {...newData, 'users_id': id}
  return db('data').insert(trueData, "id")
}

function findById(id) {
  return db('data')
    .where({ id })
    .first();
}
