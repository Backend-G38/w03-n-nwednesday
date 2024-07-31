const { getAll, create, getOne, remove, update } = require('../controllers/course.controllers');
const express = require('express');

const routerCourse = express.Router();

routerCourse.route('/')
  .get(getAll)
  .post(create);

routerCourse.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerCourse;