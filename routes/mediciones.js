var express = require("express");
const router = express.Router();
const MedicionesController = require("../controllers/mediciones")

router.get("",MedicionesController.getMediciones);
//router.post("",ProductController.addProducts);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;