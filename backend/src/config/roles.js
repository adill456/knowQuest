const allRoles = {
  student: [],
  teacher: ["makeQuiz", "editQuiz", "deleteQuiz", "viewQuiz", "viewResult","updateQuestion","deleteQuestion","createQuestion"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
