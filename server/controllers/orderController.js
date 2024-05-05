import Order from '../models/order.js';

// Create a new order
export const createOrder = async (req, res) => {
  const { customerName, customerEmail, customerPhone, deliveryAddress, notes, products } = req.body;

  try {
    const newOrder = new Order({
      customerName,
      customerEmail,
      customerPhone,
      deliveryAddress,
      notes,
      products
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('products');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('products');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an order
export const updateOrder = async (req, res) => {
  const { customerName, customerEmail, customerPhone, deliveryAddress, notes, products, status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      { customerName, customerEmail, customerPhone, deliveryAddress, notes, products, status },
      { new: true }
    ).populate('products');

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};