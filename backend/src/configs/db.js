const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://admin:QEuf6CmPcZk8PmnR@cluster0.66ddz.mongodb.net/masai-super-30-blog?retryWrites=true&w=majority"
  );
};
module.exports = connect;
