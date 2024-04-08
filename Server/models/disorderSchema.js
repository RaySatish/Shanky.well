const mongoose = require("mongoose");

const disorderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A disorder must have a name"],
  },
  description: {
    type: String,
  },
  summary: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const Disorder = mongoose.model("disorder", disorderSchema);

module.exports = Disorder;
