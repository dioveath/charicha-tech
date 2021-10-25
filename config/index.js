
require('dotenv').config();


module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  mongo: {
    DB_URI: process.env.MONGO_DB_URI
  },
};
