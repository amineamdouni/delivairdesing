var router = require("express").Router();
const {get,add,getOne,deletepost} = require("../controller/post.controller");

router.get('/',get)
router.post('/',add)
router.get("/:departCountry", getOne);
router.delete("/:post_id", deletepost);

module.exports = router;
