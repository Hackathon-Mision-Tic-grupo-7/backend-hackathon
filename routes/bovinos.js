var express = require("express");
const router = express.Router();
const BovinosController = require("../controllers/bovinos")

router.get("",BovinosController.getBovinos);
router.post("",BovinosController.addBovinos);
//router.get("/:id",ProductController.getProductId)
//router.delete("/:id",ProductController.deleteProduct);
//router.put("/:id", ProductController.editProduct);
module.exports = router;
