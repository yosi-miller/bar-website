import Contact from '../models/Contact.js';

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, notes } = req.body;
    const newContact = new Contact({ firstName, lastName, phone, email, notes });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};