import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';
import { validateContactData } from '../middlewares/contactValidation.js';

const router = express.Router();

router.post('/saveContact', validateContactData, createContact);
router.get('/getContacts', getAllContacts);

export default router;