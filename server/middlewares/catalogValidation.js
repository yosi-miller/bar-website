import { body, validationResult } from "express-validator";

// פונקציות וולידציה
const validateName = body("name")
  .isString()
  .withMessage("Name must be a string");

const validateDescription = body("description")
  .isString()
  .withMessage("Description must be a string");

const validatePrice = body("price")
  .isNumeric()
  .withMessage("Price must be a number");

const validateImageUrl = body("imageUrl")
  .isURL()
  .withMessage("Invalid image URL");

const validateIsActive = body("isActive")
  .isBoolean()
  .withMessage("isActive must be a boolean");

// מערכים של פונקציות וולידציה
export const validateCreateCatalogItem = [
  validateName.notEmpty().withMessage("Name is required"),
  validateDescription.notEmpty().withMessage("Description is required"),
  validatePrice.notEmpty().withMessage("Price is required"),
  validateImageUrl.notEmpty().withMessage("Image URL is required"),
];

export const validateUpdateCatalogItem = [
  validateName.optional().withMessage("Name must be a string"),
  validateDescription.optional().withMessage("Description must be a string"),
  validatePrice.optional().withMessage("Price must be a number"),
  validateImageUrl.optional().withMessage("Invalid image URL"),
  validateIsActive.optional().withMessage("isActive must be a boolean"),
];

export const validateRequestBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};