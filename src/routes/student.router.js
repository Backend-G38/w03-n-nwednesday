const { getAll, create, getOne, remove, update, setCourses } = require('../controllers/student.controllers');
const express = require('express');

const routerStudent = express.Router();

routerStudent.route('/')
  .get(getAll)
  .post(create);

//? students/:id/courses
routerStudent.route('/:id/courses')
  .post(setCourses)


routerStudent.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerStudent;