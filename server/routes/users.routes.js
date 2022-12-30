var router = require("express").Router();
const {get,add} = require("../controller/user.controller");
router.get("/", get);
router.post('/add',add)


module.exports = router;
