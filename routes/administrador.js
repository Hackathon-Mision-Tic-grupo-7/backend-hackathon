var express = require("express");
const router = express.Router();
const AdministradoresController = require("../controllers/administrador")

router.get("",AdministradoresController.getAdministradores);
router.post("",AdministradoresController.addAdministradores);
//router.get("/:id",ProductController.getProductId)
router.delete("/:id",AdministradoresController.deleteAdministradores);
//router.put("/:id", ProductController.editProduct);
module.exports = router;