var router = require("express").Router();
const {
  getAll,
  addProduct,
  getbyShipper,
} = require("../controller/product.controller");
router.get("/", getAll);
router.post("/", addProduct);
router.get("/shipper/:id", getbyShipper);


module.exports = router;
