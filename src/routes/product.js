import { Router } from "express";

import * as productController from "../controllers/product.controller.js";

const router = Router();

router.post("/", productController.addProduct);

export default router;
