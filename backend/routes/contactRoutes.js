import express from 'express';
import { submitContact } from '../controller/contactController';

const router = express.Router();

router.post('/contact', submitContact);

export default router;
