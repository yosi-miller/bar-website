import mongoose from "mongoose";

const catalogItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  // when the item is disabled, it will not be displayed in the catalog
  // but it will still be available in the back office
  isActive: {
    type: Boolean,
    default: true,
  },
});

const CatalogItem = mongoose.model("CatalogItem", catalogItemSchema);

export default CatalogItem;
