var express= require('express');
var bodyParse = require('body-parser');

var { mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParse.json());

app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Starting on port 3000');
});

module.exports= {app};
