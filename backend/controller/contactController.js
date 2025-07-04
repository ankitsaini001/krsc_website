import { Contact } from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(200).json({ success: true, message: 'Query received!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
