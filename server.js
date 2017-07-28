const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const fs = require("fs");
const port = process.env.PORT || 8080;

app.get("/", function(req, res) {
	res.sendFile("home.html", { root: __dirname });
});

app.post('/uploadFile', upload.single('uploadedFile'), function (req, res, next) {
  var stats = fs.statSync(req.file); // à remplacer par la fonction size de multer
  var size = stats["size"];
  console.log(size);
})

app.listen(port, function() {
	console.log("App listening on port: " + port);
});
