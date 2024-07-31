const { getAll, create, getOne, remove, update } = require('../controllers/student.controllers');
const express = require('express');

const routerStudent = express.Router();

routerStudent.route('/')
  .get(getAll)
  .post(create);

routerStudent.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerStudent;