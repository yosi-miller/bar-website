import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import {
  validateCreateOrder,
  validateUpdateOrder,
  validateRequestBody,
} from "../middlewares/orderValidation.js";

const router = express.Router();

// Create a new order
router.post("/createOrder", validateCreateOrder, validateRequestBody, createOrder);

// Get all orders
router.get("/getOrders", getAllOrders);

// Get order by ID
router.get("/getOrder/:orderId", getOrderById);

// Update an order
router.put("/updateOrder/:orderId", validateUpdateOrder, validateRequestBody, updateOrder);

// Delete an order
router.delete("/deleteOrder/:orderId", deleteOrder);

export default router;