"use strict"

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3977;
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/curso-mean2",(err,res) => {
if(err){
	throw err;
}else{
	console.log("Perfectoooooooo,lA BASE DE DATOS FUNCIONA");

	app.listen(port,function(){
		console.log("Servidor del apirest de musica http://localhost: "+ port);

	});
}
});



	