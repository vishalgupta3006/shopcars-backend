const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./api/contact');
const app = express();

//DB
const db = require('./config/key');
mongoose.connect(db, { useNewUrlParser: true }).
  then(() => console.log('Database is connected with shopcars backend...'))
  .catch(err => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use('/contact', contactRouter);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('Shopcars server running on port ' + PORT + "!!")
});