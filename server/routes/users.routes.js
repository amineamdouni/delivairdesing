var router = require("express").Router();
const {
  get,
  add,
  verify,
  getOne,
  deleteFriend,
  updateFriend,
  getfriends,

  getOneById,

  ban

} = require("../controller/user.controller");
router.get("/", get);
router.get("/contacts", getfriends);
router.post("/", add);
// router.put('/:id',verify)
router.get("/:email", getOne);
router.get("/id/:id", getOneById);
router.delete("/:id", deleteFriend);

router.put("/:id", updateFriend);



module.exports = router;
