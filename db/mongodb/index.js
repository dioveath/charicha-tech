const config = require("../../config");
const mongoose = require("mongoose");

const env = config.NODE_ENV;


if(env === "production") {
  console.log("Running in Production mode!");

  mongoose.connect(config.mongo.DB_URI,
                   {
                     useNewUrlParser: true
                   });

} else {
  console.log("Running in Development mode!");
}


mongoose.connection.once('open', function() {
  console.log("Connection has been made.");
}).on("error", function(error){
  console.log("Connection error!", error);
}).on("disconnected", function(){
  console.log("Connection disconnected!");
});


module.exports = mongoose;
