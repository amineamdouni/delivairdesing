var router = require("express").Router();
const {get,add,verify,getOne, deleteFriend,updateFriend} = require("../controller/user.controller");
router.get("/", get);
router.post('/',add)
// router.put('/:id',verify)
router.get("/:email", getOne);
router.delete("/:id",deleteFriend)
router.put('/:id', updateFriend);

module.exports = router;
