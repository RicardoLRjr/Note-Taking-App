var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
var path = require("path");
// var savedNotes = require("../db.json");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// HTML Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

// API Routes

app.get("/api/tables", function(req, res) {
    res.json(savedNotes);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  