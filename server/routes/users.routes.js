var router = require("express").Router();
const {get,add,verify,getOne, deleteFriend} = require("../controller/user.controller");
router.get("/", get);
router.post('/',add)
router.put('/:id',verify)
router.get("/:email", getOne);
router.delete("/:id",deleteFriend)

module.exports = router;
