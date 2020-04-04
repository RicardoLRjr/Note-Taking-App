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

app.get("/api/db.json/:id", function(req, res) {
    const index = parseInt(req.params.id);
    console.log(index);
  
    if (isNaN(index)) {
      res.status(400);
      return res.send("there is not an id at this location");
    }
  
    fs.readFile("db.json", function(err, data) {
      if (err) {
          console.log(err);
        res.status(500);
        return res.send("Something broke here...");
      }
      const pastNotes = JSON.parse(data);
      if (index >= 0 && index < pastNotes.length) {
        res.json(pastNotes[index]);
        console.log("index function worked")
      } else {
        res.status(404);
        return res.send("Error,there is no note here");
      }
    });
  });


app.post("/api/notes", function(req, res) {
        var newNote = req.body; 
        console.log(newNote);
        fs.appendFile("db.json", newNote + '\n', function(err) {
            if (err) {
              console.log(err);
            }
            else {
              console.log("Commit logged!");
            }
       res.json(newNote)   
          })
          
  });
//   * POST `/api/notes` - Should receive a new note to save on the request body,
// add it to the `db.json` file, and then return the new note to the client.
app.delete("/api/notes/:id", function(req, res){
    fs.readFile(title)
    // Insert corrected savedNotes section.
})

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique `id` when it's saved. 
// In order to delete a note, 
// you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, 
// and then rewrite the notes to the `db.json` file.

app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });
  