const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rose07a:1234@cluster0-5bbih.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("Connected!"))
  .catch(err=>console.log(err))
 
app.get('/', function (req, res){
  res.send('안녕하세요!!!');
})

app.listen(3000, () => console.log("App is running!!!"));