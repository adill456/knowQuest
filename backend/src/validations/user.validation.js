const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    role: Joi.string().required().valid('student', 'teacher'),

    studentId: Joi.when('role', {
      is: 'student',
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    degree: Joi.when('role', {
      is: 'student',
      then: Joi.string().required().valid('BS Math', 'BS Computer Science', 'BS Physics'),
      otherwise: Joi.forbidden(),
    }),
    semester: Joi.when('role', {
      is: 'student',
      then: Joi.number().required().integer().min(1).max(8),
      otherwise: Joi.forbidden(),
    }),

    teacherId: Joi.when('role', {
      is: 'teacher',
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    department: Joi.when('role', {
      is: 'teacher',
      then: Joi.string().required().valid('Math', 'Computer Science', 'Physics'),
      otherwise: Joi.forbidden(),
    }),
    subjects: Joi.when('role', {
      is: 'teacher',
      then: Joi.array().items(Joi.string()).required(),
      otherwise: Joi.forbidden(),
    }),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
