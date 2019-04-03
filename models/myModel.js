const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myModelSchema = new Schema({
  name: { type: String }
});

const MyModel = mongoose.model("MyModel", myModelSchema);

module.exports = MyModel;
