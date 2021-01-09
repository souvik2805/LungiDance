const mongoose = require("mongoose");
const { userSchema, dataSchema } = require("./Schema");
const Mogodb_String =
  "mongodb+srv://Admin:Admin@cluster0.gg7ua.mongodb.net/RuleEngine?retryWrites=true&w=majority";
mongoose
  .connect(Mogodb_String, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Established"))
  .catch((err) => console.log("error while connect !!", err));

const user_Collection = mongoose.model("NewUser", userSchema);
const data_Collection = mongoose.model("Data", dataSchema);

exports.user_Collection = user_Collection;
exports.data_Collection = data_Collection;
