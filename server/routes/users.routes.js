var router = require("express").Router();
const {get} = require("../controller/user.controller");
router.get("/", get);

module.exports = router;
