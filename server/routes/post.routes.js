var router = require("express").Router();
const {get,newPost} = require("../controller/post.controller");

router.get('/',get)
router.post('/newPost',newPost)

module.exports = router;
