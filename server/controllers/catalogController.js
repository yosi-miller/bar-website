import CatalogItem from "../models/catalogItem.js";

// Create a new catalog item
export const createCatalogItem = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const newItem = new CatalogItem({ name, description, price, imageUrl });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all active catalog items to the website frontend (isActive: true)
export const getActiveCatalogItems = async (req, res) => {
  try {
    const items = await CatalogItem.find({ isActive: true });
    res.status(201).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all catalog items to the baekoffice frontend (isActive: true and false)
export const getAllCatalogItems = async (req, res) => {
  try {
    const items = await CatalogItem.find();
    res.status(201).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a catalog item
export const updateCatalogItem = async (req, res) => {
  const { name, description, price, imageUrl, isActive } = req.body;
  const updateFields = { name, description, price, imageUrl };

  if (isActive !== undefined) {
    updateFields.isActive = isActive;
  }

  try {
    const updatedItem = await CatalogItem.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a catalog item
export const deleteCatalogItem = async (req, res) => {
  try {
    const deletedItem = await CatalogItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
