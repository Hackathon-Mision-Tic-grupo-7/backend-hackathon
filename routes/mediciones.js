var express = require("express");
const router = express.Router();
const MedicionesController = require("../controllers/mediciones")


router.get("",MedicionesController.getMediciones);
router.get("/:id",MedicionesController.getMedicionesID)
//router.post("",ProductController.addProducts);

//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;