var express = require("express");
const router = express.Router();
const FincasController = require("../controllers/finca")

router.get("",FincasController.getFincas);
//router.post("",ProductController.addProducts);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;