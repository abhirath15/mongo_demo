// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client)=>{
	if(err){
		return console.log('Cannot connect');
	}
	console.log('Connected Successfully');

	var db = client.db('TodoApp');
	
	db.collection('Users').findOneAndUpdate(
		{
		_id: new ObjectID('5acbbc7db43e501bacc042f0')},
		{
			$set:{
				name:"gaps"
			},
		
			$inc:{
				age:1
			}
		},

			{
				returnOriginal:false
		 }).then((result)=>{
		console.log(result);
		// console.log(JSON.stringify(docs, undefined, 2));
		})
	

	client.close();
});