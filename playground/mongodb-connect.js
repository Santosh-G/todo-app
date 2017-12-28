const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log("unable to connect to MongoDB Server");
	}
	console.log('Connected to MongoDB Server');
});