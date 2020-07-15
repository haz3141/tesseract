const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = new Schema(
  {
    itemName: { type: String, required: false },
    companyName: { type: String, required: false },
    username: { type: String, required: false },
    price: { type: String, required: false },
    description: { type: String, required: false },
    userId: { type: String, required: false },

  },
  { timestamps: true }
);

module.exports = mongoose.model("items", Item);
