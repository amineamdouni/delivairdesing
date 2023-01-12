var router = require("express").Router();
const {get,newPost} = require("../controller/post.controller");

router.get('/',get)
router.post('/',newPost)

module.exports = router;
