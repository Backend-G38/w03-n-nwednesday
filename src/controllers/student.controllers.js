const catchError = require('../utils/catchError');
const Student = require('../models/Student');
const Course = require('../models/Course');

const getAll = catchError(async (req, res) => {
  const results = await Student.findAll({ include: [Course] });
  console.log(req.query);
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Student.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Student.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Student.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Student.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

//!EXPLICACION _> Y YO ME VOY A DAR CUENTA QUIEN HACE TRAMPA. 
//? /students/:id/courses

const setCourses = catchError(async (req, res) => {
  //! 1- identificar al estudiante
  const { id } = req.params
  const student = await Student.findByPk(id)

  //!  2- seteo los cursos a los estudiantes
  await student.setCourses(req.body)

  //!  3- Obtengo lo que setee, con el objetivo de dar la vista
  const courses = await student.getCourses()

  //!  4 finalmente retorno
  return res.json(courses)

})


module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setCourses
}