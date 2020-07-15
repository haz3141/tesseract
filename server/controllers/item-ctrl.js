const Item = require("../models/item-model");
const User = require("../models/user-model");

createItem = (req, res) => {
  const body = req.body;
  body.id = req.user._id;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item",
    });
  }

  const item = new Item(body);

  if (!item) {
    return res.status(400).json({ success: false, error: err });
  }

  item
    .save()
    .then(() => {
      console.log("update user");
      return User.updateOne({ _id: body.id }, { $push: { items: item._id } });
    })
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: "Item created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Item not created!",
      });
    });
};

module.exports = {
  createItem,
};
