const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;

app.get("/", function(req,res){
	res.sendFile('home.html', { root: __dirname });
})

app.listen(port, function() {
  console.log("App listening on port: " + port);
});
