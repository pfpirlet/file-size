const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const port = process.env.PORT || 8080;

app.get("/", function(req, res) {
	res.sendFile("home.html", { root: __dirname });
});

app.post('/upload', upload.single('uploadedFile'), function (req, res, next) {
  console.log(req.file.size);
})

app.listen(port, function() {
	console.log("App listening on port: " + port);
});
