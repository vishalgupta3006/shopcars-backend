const express = require('express');
const router = express.Router();
const Contact = require('../model/ContactForm');

router.post('/', (req, res) => {
  const {
    queryType,
    description,
    name,
    phone,
    email
  } = req.body;
  const newQuery = new Contact({
    queryType,
    description,
    name,
    phone,
    email
  });
  newQuery.save()
  .then(()=>res.send("Form Sent Successfully"))
  .catch(err=>{
    return res.status(400).json(err)
  });
  
})

module.exports = router;