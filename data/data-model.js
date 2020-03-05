const db = require('../database/dbConfig.js');

module.exports = {
  addData,
  find,
  findBy,
  findById,
  update,
  remove,
  findDataByUserId
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

async function update(id, changes) {
  return db("data")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("data")
    .where({ id })
    .del();
}

function findDataByUserId(id){
  const newId = id
  return db('data').select('*')
  .where({users_id: newId})
}