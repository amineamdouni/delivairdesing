var router = require("express").Router();
const {
  get,
  add,
  verify,
  getOne,
  deleteFriend,
  updateFriend,
  getfriends,
  ban
} = require("../controller/user.controller");
router.get("/", get);
router.get("/contacts", getfriends);
router.post("/", add);
// router.put('/:id',verify)
router.get("/:email", getOne);
router.delete("/:id", deleteFriend);

router.put("/:id", updateFriend);
router.delete("/:user_id", ban);


module.exports = router;
