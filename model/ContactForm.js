const mongoose = require('mongoose');
const contactFormSchema = new mongoose.Schema({
  queryType: String,
  description: String,
  name: String,
  email: String,
  phone: {
    type: Number,
    max: 9999999999,
    min: 1000000000
  }
})
const Contact = mongoose.model('ContactForm', contactFormSchema);
module.exports = Contact;