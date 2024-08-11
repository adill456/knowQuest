const Joi = require('joi');
const { password } = require('./custom.validation');

const register = {
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

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
