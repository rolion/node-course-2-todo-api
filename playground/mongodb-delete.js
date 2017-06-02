//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connecto to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });
// deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({complete:false}).then((result)=>{
//   console.log(result);
// });

//db.collection('User').deleteMany({name:'Oscar Leon'});

db.collection('User').findOneAndDelete({
  _id: new ObjectID('5930c17da39de72e7c32b4a7')
}).then((result)=>{
  console.log(JSON.stringify(result, undefined, 2));
});
  //db.close();
});
