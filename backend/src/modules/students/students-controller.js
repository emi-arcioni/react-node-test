const asyncHandler = require('express-async-handler');
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require('./students-service');

const handleGetAllStudents = asyncHandler(async (req, res) => {
  //write your code
  const students = await getAllStudents(req.params);
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  //write your code
  const message = await addNewStudent(req.body);
  res.json({ message })
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  //write your code
  const message = await updateStudent(req.body);
  res.json({ message })
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  //write your code
  const student = await getStudentDetail(req.params.id);
  res.json({ student })
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  //write your code
  const params = {
    userId: req.params.id,
    reviewerId: req.body.reviewerId,
    status: req.body.status
  }
  const message = await setStudentStatus(params);
  res.json({ message })
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
