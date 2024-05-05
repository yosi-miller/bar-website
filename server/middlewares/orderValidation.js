import { body, validationResult } from 'express-validator';

// Validation functions
const validateCustomerName = body('customerName')
  .isString()
  .notEmpty()
  .withMessage('Customer name is required and must be a string');
  // Expected format: "John Doe"

const validateCustomerEmail = body('customerEmail')
  .isEmail()
  .notEmpty()
  .withMessage('Customer email is required and must be a valid email address');
  // Expected format: "example@email.com"

const validateCustomerPhone = body('customerPhone')
  .isMobilePhone()
  .notEmpty()
  .withMessage('Customer phone is required and must be a valid phone number');
  // Expected format: "+1234567890"

const validateDeliveryAddress = body('deliveryAddress')
  .optional()
  .isString()
  .withMessage('Delivery address must be a string');
  // Expected format: "123 Main St, City"

const validateNotes = body('notes')
  .optional()
  .isString()
  .withMessage('Notes must be a string');
  // Expected format: "Additional notes or instructions"

const validateProducts = body('products')
  .isArray({ min: 1 })
  .withMessage('Products must be a non-empty array');
  // Expected format: ["6456789012345", "6789012345678"]

const validateStatus = body('status')
  .optional()
  .isIn(['pending', 'completed'])
  .withMessage('Invalid status');
  // Expected values: "pending" or "completed"

// Validation arrays
export const validateCreateOrder = [
  validateCustomerName,
  validateCustomerEmail,
  validateCustomerPhone,
  validateProducts,
  validateDeliveryAddress.optional(),
  validateNotes.optional()
];

export const validateUpdateOrder = [
  validateCustomerName.optional(),
  validateCustomerEmail.optional(),
  validateCustomerPhone.optional(),
  validateDeliveryAddress.optional(),
  validateNotes.optional(),
  validateProducts.optional(),
  validateStatus.optional(),
];

export const validateRequestBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};