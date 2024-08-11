const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles, degrees, departments } = require('../config/academic');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true,
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
      index: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
      index: true,
    },
    studentId: {
      type: String,
      trim: true,
      unique: function () {
        return this.role === 'student';
      },
      validate: function (value) {
        if (this.role === 'student' && !value) {
          throw new Error('Student ID is required for students');
        }
      }
    },
    degree: {
      type: String,
      enum: degrees,
      trim: true,
      validate: function (value) {
        if (this.role === 'student' && !value) {
          throw new Error('Degree is required for students');
        }
      }
    },
    semester: {
      type: Number,
      validate: function (value) {
        if (this.role === 'student' && !value) {
          throw new Error('Semester is required for students');
        }
      }
    },
    teacherId: {
      type: String,
      trim: true,
      unique: function () {
        return this.role === 'teacher';
      },
      validate: function (value) {
        if (this.role === 'teacher' && !value) {
          throw new Error('Teacher ID is required for teachers');
        }
      }
    },
    department: {
      type: String,
      enum: departments,
      trim: true,
      validate: function (value) {
        if (this.role === 'teacher' && !value) {
          throw new Error('Department is required for teachers');
        }
      }
    },
    subjects: {
      type: [String],
      validate: function (value) {
        if (this.role === 'teacher' && (!value || value.length === 0)) {
          throw new Error('Subjects are required for teachers');
        }
      }
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
