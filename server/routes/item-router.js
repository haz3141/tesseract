const router = require("express").Router();
const itemCtrl = require("../controllers/item-ctrl");

router.post("/item", itemCtrl.createItem);
// router.put("/user/:id", UserCtrl.updateUser);
// router.delete("/user/:id", UserCtrl.deleteUser);
// router.get("/user/:id", UserCtrl.getUserById);
// router.get("/users", UserCtrl.getUsers);

module.exports = router;
