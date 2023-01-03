var router = require("express").Router();
const {get,add,verify} = require("../controller/user.controller");
router.get("/", get);
router.post('/add',add)
router.put('/:id',verify)

module.exports = router;
