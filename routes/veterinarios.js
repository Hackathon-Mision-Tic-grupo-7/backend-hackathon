var express = require("express");
const router = express.Router();
const VeterinariosController = require("../controllers/veterinarios")

router.get("",VeterinariosController.getVeterinarios);
//router.post("",ProductController.addProducts);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;