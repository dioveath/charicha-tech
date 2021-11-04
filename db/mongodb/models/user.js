const mongoose = require('../index');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  nickname: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  roles: Array
}, { timestamps: true });

UserSchema.plugin(uniqueValidator);
var User = mongoose.model("User", UserSchema);

module.exports = User;
