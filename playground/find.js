// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client)=>{
	if(err){
		return console.log('Cannot connect');
	}
	console.log('Connected Successfully');

	var db = client.db('TodoApp');
	
	db.collection('Users').find({name: "Abhirath"}).toArray().then((docs)=>{
		console.log('users');
		console.log(JSON.stringify(docs, undefined, 2));
		},
	(err)=>
	{
		if(err){
			return console.log('Cannot Insert',err);

		}
		
	});

	client.close();
});