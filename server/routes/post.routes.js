var router = require("express").Router();

const {get,newPost,deletePost} = require("../controller/post.controller");

router.get('/',get)
router.post("/", newPost);
router.delete("/:id", deletePost);


module.exports = router;
