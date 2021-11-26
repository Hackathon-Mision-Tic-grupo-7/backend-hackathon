var express = require("express");
const router = express.Router();
const AdministradoresController = require("../controllers/administrador")

router.get("",AdministradoresController.getAdministradores);
//router.post("",ProductController.addProducts);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;