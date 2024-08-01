const Course = require("./Course");
const Student = require("./Student");

Course.belongsToMany(Student, { through: 'coursesStudents' })
Student.belongsToMany(Course, { through: 'coursesStudents' })
