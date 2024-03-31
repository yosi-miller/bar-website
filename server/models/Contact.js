import mongoose from "mongoose";

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    notes: {
      type: String, // Notes field is optional
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Contact model using the defined schema
const Contact = mongoose.model("Contact", contactSchema);

// Export the Contact model as the default export
export default Contact;
