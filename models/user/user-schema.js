const Joi = require("joi");

const userUpdateSchema = Joi.object().keys({
  first_name: Joi.string().alphanum().min(3).max(30),
  last_name: Joi.string().alphanum().min(3).max(30),
  nickname: Joi.string().max(20).pattern(/^[A-z]+$/),
  email: Joi.string().email(),
  password: Joi.string().pattern(/^[A-z0-9~!@#$%^&*()_+-=]{3,30}$/),
}).min(1);


const userSchema = userUpdateSchema.options({ presence: 'required'});

module.exports = {
  userSchema,
  userUpdateSchema
};
