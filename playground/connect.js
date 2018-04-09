const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err,client)=>{
	if(err){
		return console.log('Cannot connect');
	}
	console.log('Connected Successfully');

	var db = client.db('TodoApp');

	// db.collection('Todos').insertOne(
	// 	{
	// 		text: "Some task",
	// 		completed:false
	// 	},
	// 	(err,result)=>
	// 		{
	// 			if(err){
	// 			return console.log('Not inserted');
	// 		}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));


	// 	});
	
	db.collection('Users').insertOne({
		name: "Abhirath",
		age:"23",
		location: "jhansi"
	},
	(err,result)=>
	{
		if(err){
			return console.log('Cannot Insert');

		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});