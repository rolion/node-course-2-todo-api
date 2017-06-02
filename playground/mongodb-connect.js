//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').insertOne({
    text:'Sometig to do',
    complete: false
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert Todos');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/
/*  db.collection('User').insertOne({
    name:'Oscar Leon',
    age: 27,
    location: 'Bolivia'
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });*/
  db.close();
});
