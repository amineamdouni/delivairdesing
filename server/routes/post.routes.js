var router = require("express").Router();
const {get} = require("../controller/post.controller");

router.get('/',get)

module.exports = router;
