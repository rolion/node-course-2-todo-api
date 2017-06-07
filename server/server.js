var express= require('express');
var bodyParse = require('body-parser');

const {ObjectID} =require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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

app.get('/todos',(req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req, res)=>{
  var id =req.params.id;
  if(!ObjectID.isValid(id)){
      return res.status(400).send('id is not valid');
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send('todo not found')
    }
    return res.status(200).send(todo);
  }, (e) => {
    return res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Starting on port 3000');
});

module.exports= {app};
