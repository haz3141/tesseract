const Item = require("../models/item-model");

createItem = (req, res) => {
  let body = req.body;
  body.id = req.user._id;
  console.log(body.id);
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
