const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Uj293:Abc123456@cluster0.yy2tidg.mongodb.net/user-database?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((e) => {
    console.log("Not connected to the database");
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("user", userSchema);
module.exports = User;
