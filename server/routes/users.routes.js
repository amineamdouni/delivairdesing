var router = require("express").Router();
const {get,add,verify,getOne} = require("../controller/user.controller");
router.get("/", get);
router.post('/add',add)
router.put('/:id',verify)
router.get("/:email", getOne);

module.exports = router;
