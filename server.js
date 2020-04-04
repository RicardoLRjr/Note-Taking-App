var express = require("express");
var fs = require("fs")
var app = express();
var PORT = process.env.PORT || 8080;
var path = require("path");
var savedNotes = require("./db.json");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// HTML Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
// API Routes
app.get("/api/notes", function(req, res) {
    fs.readFile(savedNotes, function(err, data){
        if(err){
            return res.send("you made an error")
        }
        const pastNotes = json.parse(data)
        res.json(pastNotes)
})
 });
app.post("/api/notes", function(req, res) {
        var newNote2 = req.body; 
        console.log(newNote2);
        fs.readFile("db.json", function(err, data) {
            const postNotes = JSON.parse(data);
            postNotes.push(newNote2);
            console.log(postNotes);
            fs.writeFile("db.json", JSON.stringify(postNotes), function(err) {
              if (err) {
                res.status(500);
                return res.send("the note failed to save..");
              }
              res.send("the note was written!");
            });
          });
          
  });
app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });