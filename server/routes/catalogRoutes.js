import express from "express";
import {
  createCatalogItem,
  getActiveCatalogItems,
  getAllCatalogItems,
  updateCatalogItem,
  deleteCatalogItem,
} from "../controllers/catalogController.js";
import {
  validateCreateCatalogItem,
  validateUpdateCatalogItem,
  validateRequestBody,
} from "../middlewares/catalogValidation.js";

const router = express.Router();

// Routes
router.post(
  "/addItem",
  validateCreateCatalogItem,
  validateRequestBody,
  createCatalogItem
);
router.get("/activeItems", getActiveCatalogItems); // Get all active catalog items to the website frontend (isActive: true)
router.get("/allItems", getAllCatalogItems); // Get all active catalog items to the baekoffice frontend (isActive: true and false)
router.put(
  "/updateItem/:id",
  validateUpdateCatalogItem,
  validateRequestBody,
  updateCatalogItem
);
router.delete("/deleteItem/:id", deleteCatalogItem);
// router.put('/item/:id/deactivate', deactivateCatalogItem);

export default router;
