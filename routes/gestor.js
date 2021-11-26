var express = require("express");
const router = express.Router();
const GestoresController = require("../controllers/gestor")

router.get("",GestoresController.getGestores);
//router.post("",ProductController.addProducts);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;