//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('592e2067caf2da671a99e66e')
  // },{
  //   $set:{
  //     complete:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('User').findOneAndUpdate({
    _id:new ObjectID('5930c18ca39de72e7c32b4ae')
  },{
    $set:{
      name:'Oscar'
    },$inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  //db.close();
});
